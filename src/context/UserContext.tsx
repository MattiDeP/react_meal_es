import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type AppUser = {
  name: string;
  loggedIn: boolean;
};

type UserContextValue = {
  user: AppUser | null;
  login: (name: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<AppUser | null>(null);

  const login = useCallback((name: string) => {
    setUser({ name, loggedIn: true });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo<UserContextValue>(() => ({ user, login, logout }), [user, login, logout]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return ctx;
}

export { UserContext };


