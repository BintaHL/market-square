import "server-only";

import {
  clearAuthCookies,
  getAccessToken,
  getRefreshToken,
  setAuthCookies,
} from "./auth";


interface ApiFetchOptions extends RequestInit {
  retry?: boolean;
}


interface RefreshResponse {
  access_token: string;
  refresh_token?: string;
  token_type?: string;
}



//  Refresh the access token using the refresh token.

async function refreshAccessToken(): Promise<boolean> {
  const refreshToken = await getRefreshToken();

  if (!refreshToken) {
    return false;
  }

  try {
    const response = await fetch(
      `${process.env.API_URL}/auth/refresh`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          refresh_token: refreshToken,
        }),

        cache: "no-store",
      }
    );

    if (!response.ok) {
      await clearAuthCookies();

      return false;
    }

    const data: RefreshResponse = await response.json();

    if (!data.access_token) {
      await clearAuthCookies();

      return false;
    }

    await setAuthCookies(
      data.access_token,
      data.refresh_token ?? refreshToken
    );

    return true;

  } catch (error) {
    console.error("TOKEN REFRESH ERROR:", error);

    await clearAuthCookies();

    return false;
  }
}



//   Thsi is the Central authenticated API request.
//   Automatically:Gets access token,Sends request,Detects 401,Refreshes access token,and Retries request once

export async function apiFetch(
  endpoint: string,
  options: ApiFetchOptions = {}
): Promise<Response> {

  const {
    retry = true,
    headers,
    ...fetchOptions
  } = options;


  const accessToken = await getAccessToken();


  const response = await fetch(
    `${process.env.API_URL}${endpoint}`,
    {
      ...fetchOptions,

      headers: {
        ...headers,

        ...(accessToken
          ? {
              Authorization:
                `Bearer ${accessToken}`,
            }
          : {}),
      },

      cache: "no-store",
    }
  );


  
    // If token is still valid,
    // return response normally.
   
  if (response.status !== 401) {
    return response;
  }


  
//  Prevent infinite refresh loops.
   
  if (!retry) {
    return response;
  }


//   Access token expired.Try refresh token.

  const refreshed = await refreshAccessToken();


//   Refresh failed.
  if (!refreshed) {
    return response;
  }


  
    // Get the NEW access token.
   
  const newAccessToken =
    await getAccessToken();


  
//    Retry the original request once

  return fetch(
    `${process.env.API_URL}${endpoint}`,
    {
      ...fetchOptions,

      headers: {
        ...headers,

        ...(newAccessToken
          ? {
              Authorization:
                `Bearer ${newAccessToken}`,
            }
          : {}),
      },

      cache: "no-store",
    }
  );
}