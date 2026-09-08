import "server-only";

import { getCurrentUser } from "./user";
import type { CurrentUser, UserRole } from "./types/auth";

export async function requireRole(
  role: UserRole
): Promise<CurrentUser | null> {
  const user = await getCurrentUser();
  return user?.role === role ? user : null;
}
