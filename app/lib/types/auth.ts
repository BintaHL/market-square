export type UserRole = "user" | "admin" | "seller";

export interface CurrentUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  seller_application?: SellerApplication | null;
}

export interface SellerApplication {
  id: number;
  business_name: string;
  business_description?: string;
  status?: "pending" | "approved" | "rejected";
  is_approved?: boolean;
  created_at?: string;
}
