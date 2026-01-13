export type UserRole = 'admin' | 'faculty' | 'student' | 'parent';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface RoleConfig {
  role: UserRole;
  label: string;
  description: string;
  icon: string;
  color: string;
}
