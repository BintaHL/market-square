import "server-only";

import { apiFetch } from "./api";
import type { CurrentUser } from "./types/auth";


export async function getCurrentUser(): Promise<
  CurrentUser | null
> {

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