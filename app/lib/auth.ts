import { cookies } from "next/headers";


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