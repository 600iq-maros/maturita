'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

export type UserStats = {
  totalAnswered: number;
  totalCorrect: number;
  wrongQuestions: Record<number, number>; // questionId -> error count
  bestStreak: number;
};

export type User = {
  username: string;
  pin: string;
  stats: UserStats;
  createdAt: number;
};

type AuthContextType = {
  user: User | null;
  allUsers: User[];
  login: (username: string, pin: string) => string | null;
  register: (username: string, pin: string) => string | null;
  logout: () => void;
  updateStats: (correct: boolean, questionId: number, streak: number) => void;
  refreshUsers: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const USERS_KEY = 'maturita_users';
const CURRENT_USER_KEY = 'maturita_current_user';

function loadUsers(): User[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const users = loadUsers();
    setAllUsers(users);
    const currentUsername = localStorage.getItem(CURRENT_USER_KEY);
    if (currentUsername) {
      const found = users.find(u => u.username === currentUsername);
      if (found) setUser(found);
    }
    setLoaded(true);
  }, []);

  const refreshUsers = useCallback(() => {
    setAllUsers(loadUsers());
  }, []);

  const login = useCallback((username: string, pin: string): string | null => {
    const users = loadUsers();
    const found = users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (!found) return 'Používateľ neexistuje';
    if (found.pin !== pin) return 'Nesprávny PIN';
    setUser(found);
    localStorage.setItem(CURRENT_USER_KEY, found.username);
    setAllUsers(users);
    return null;
  }, []);

  const register = useCallback((username: string, pin: string): string | null => {
    const users = loadUsers();
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
      return 'Meno je už obsadené';
    }
    if (username.length < 2) return 'Meno musí mať aspoň 2 znaky';
    if (!/^\d{4}$/.test(pin)) return 'PIN musí byť presne 4 číslice';
    const newUser: User = {
      username,
      pin,
      stats: { totalAnswered: 0, totalCorrect: 0, wrongQuestions: {}, bestStreak: 0 },
      createdAt: Date.now(),
    };
    users.push(newUser);
    saveUsers(users);
    setUser(newUser);
    setAllUsers(users);
    localStorage.setItem(CURRENT_USER_KEY, username);
    return null;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  }, []);

  const updateStats = useCallback((correct: boolean, questionId: number, streak: number) => {
    const users = loadUsers();
    const idx = users.findIndex(u => u.username === user?.username);
    if (idx === -1) return;
    const u = users[idx];
    u.stats.totalAnswered++;
    if (correct) {
      u.stats.totalCorrect++;
    } else {
      u.stats.wrongQuestions[questionId] = (u.stats.wrongQuestions[questionId] || 0) + 1;
    }
    if (streak > u.stats.bestStreak) u.stats.bestStreak = streak;
    saveUsers(users);
    setUser({ ...u });
    setAllUsers([...users]);

    // Sync to shared leaderboard (fire-and-forget)
    fetch('/api/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: u.username,
        totalAnswered: u.stats.totalAnswered,
        totalCorrect: u.stats.totalCorrect,
        bestStreak: u.stats.bestStreak,
      }),
    }).catch(() => {});
  }, [user?.username]);

  if (!loaded) return null;

  return (
    <AuthContext.Provider value={{ user, allUsers, login, register, logout, updateStats, refreshUsers }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
