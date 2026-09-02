export type UserRole = "user" | "admin" | "seller";

export interface CurrentUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}