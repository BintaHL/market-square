export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
}

export interface RefreshResponse {
  success: boolean;
  message?: string;
}

export interface Users {
  id: number;
  name: string;
  email: string;
  phone_number:string;
  role?: string;
  is_active: true;
  created_at: string;
}

export interface MeResponse {
  authenticated: boolean;
  user?: Users;
  message?: string;
}

export interface AuthErrorResponse {
  message: string;
}