import "server-only";

import { apiFetch } from "./api";
import { getAccessToken, isDemoAdminAccessToken } from "./auth";
import type { CurrentUser } from "./types/auth";


export async function getCurrentUser(): Promise<
  CurrentUser | null
> {

  const accessToken = await getAccessToken();

  if (isDemoAdminAccessToken(accessToken)) {
    return {
      id: 0,
      username: process.env.DEMO_ADMIN_USERNAME ?? "admin",
      email: "admin@example.test",
      role: "admin",
    };
  }

  try {

    const response = await apiFetch(
      "/user/me"
    );


    if (!response.ok) {
      return null;
    }


    return await response.json();

  } catch (error) {

    console.error(
      "GET CURRENT USER ERROR:",
      error
    );

    return null;
  }
}
