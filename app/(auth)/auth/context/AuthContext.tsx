"use client";


import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, MockStoredUser } from '../types/auth';
import { redirect } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  loginWithCredentials: (email: string, password: string) => Promise<void>;
  loginWithEmailOnly: (email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // 1. Initialize state directly from localStorage to prevent cascading renders
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('mock_user');
      try {
        return savedUser ? JSON.parse(savedUser) : null;
      } catch {
        return null;
      }
    }
    return null;
  });

  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mock_token');
    }
    return null;
  });

  // 2. Loading is false immediately on client render since state is loaded above
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    return typeof window === 'undefined';
  });

  // Helpers to simulate backend database
  const getMockUsers = (): MockStoredUser[] => JSON.parse(localStorage.getItem('mock_db_users') || '[]');
  
  const saveSession = (mockUser: User) => {

    const mockToken = `mock-jwt-token.${btoa(JSON.stringify(mockUser))}`;
    localStorage.setItem('mock_user', JSON.stringify(mockUser));
    localStorage.setItem('mock_token', mockToken);
    document.cookie = `mock_token=${mockToken}; path=/; max-age=86400; SameSite=Strict`;
    setUser(mockUser);
    setToken(mockToken);
  };

  // 1. SIGNUP: Name, Email, Password
  const register = async (fullName: string, email: string, password: string) => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 600));

    const users = getMockUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      setIsLoading(false);
      throw new Error('User already exists with this email.');
    }

    const mockId = Date.now();
    const newUser: MockStoredUser = {
      id: mockId,
      fullName,
      email,
      password,
      avatarUrl: `https://dicebear.com{mockId}`,
    };

    users.push(newUser);
    localStorage.setItem('mock_db_users', JSON.stringify(users));
    setIsLoading(false);
  };

  // 2. STANDARD LOGIN: Email and Password
  const loginWithCredentials = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 600));

    const users = getMockUsers();
    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!foundUser) {
      setIsLoading(false);
      throw new Error('Invalid email or password.');
    }

    // Strip password out before saving session data
    const sessionUser: User = {
      id: foundUser.id,
      fullName: foundUser.fullName,
      email: foundUser.email,
      avatarUrl: foundUser.avatarUrl
    };

    saveSession(sessionUser);
    setIsLoading(false);
  };

  // 3. ALTERNATIVE: Sign in with Email only (Magic Link style)
  const loginWithEmailOnly = async (email: string) => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 800)); // slightly longer fake network time

    const users = getMockUsers();
    let foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    // For smooth demoing: If email doesn't exist, auto-create a profile on the fly
    if (!foundUser) {
      const mockId = Date.now();
      const generatedName = email.split('@')[0];
      foundUser = {
        id: mockId,
        fullName: generatedName.charAt(0).toUpperCase() + generatedName.slice(1),
        email,
        avatarUrl: `https://dicebear.com{mockId}`,
      };
      users.push(foundUser);
      localStorage.setItem('mock_db_users', JSON.stringify(users));
    }

    const sessionUser: User = {
      id: foundUser.id,
      fullName: foundUser.fullName,
      email: foundUser.email,
      avatarUrl: foundUser.avatarUrl
    };

    saveSession(sessionUser);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('mock_user');
    localStorage.removeItem('mock_token');
    document.cookie = 'mock_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setUser(null);
    setToken(null);
    redirect('/login');
    // window.location.href = ';
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, register, loginWithCredentials, loginWithEmailOnly, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
