import { cookies } from "next/headers";

// Demo authentication is disabled unless it is explicitly enabled. This is
// intentionally configurable in production so preview/demo deployments can
// use the documented demo credentials without an API_URL.
export const DEMO_ADMIN_ACCESS_TOKEN = "demo-admin-access-token";
export const DEMO_ADMIN_REFRESH_TOKEN = "demo-admin-refresh-token";

export function isDemoAuthEnabled() {
  return process.env.DEMO_AUTH_ENABLED === "true";
}

export function isDemoAdminAccessToken(token: string | undefined) {
  return isDemoAuthEnabled() && token === DEMO_ADMIN_ACCESS_TOKEN;
}


export async function setAuthCookies(
  accessToken: string,
  refreshToken: string
) {
  const cookieStore = await cookies();


  cookieStore.set(
    "access_token",
    accessToken,
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    }
  );


  cookieStore.set(
    "refresh_token",
    refreshToken,
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    }
  );
}


export async function getAccessToken() {
  const cookieStore = await cookies();

  return cookieStore
    .get("access_token")
    ?.value;
}


export async function getRefreshToken() {
  const cookieStore = await cookies();

  return cookieStore
    .get("refresh_token")
    ?.value;
}


export async function isLoggedIn(): Promise<boolean> {
  const accessToken =
    await getAccessToken();

  return !!accessToken;
}


export async function clearAuthCookies() {
  const cookieStore = await cookies();

  cookieStore.delete("access_token");

  cookieStore.delete("refresh_token");
}
