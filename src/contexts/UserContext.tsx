import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '@/types/user';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (role: UserRole) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const mockUsers: Record<UserRole, User> = {
  admin: {
    id: '1',
    name: 'Dr. John Smith',
    email: 'admin@college.edu',
    role: 'admin',
  },
  faculty: {
    id: '2',
    name: 'Prof. Sarah Johnson',
    email: 'faculty@college.edu',
    role: 'faculty',
  },
  student: {
    id: '3',
    name: 'Alex Thompson',
    email: 'student@college.edu',
    role: 'student',
  },
  parent: {
    id: '4',
    name: 'Michael Thompson',
    email: 'parent@college.edu',
    role: 'parent',
  },
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: UserRole) => {
    setUser(mockUsers[role]);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
