export interface User {
  id: number;
  email: string;
  fullName: string;
  avatarUrl: string;
}

export interface MockStoredUser extends User {
  password?: string;
}
