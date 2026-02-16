"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { mockAuthService, User, LoginCredentials } from "@/lib/auth";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Recuperar token y usuario del localStorage al montar
  useEffect(() => {
    const initAuth = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const storedUser = localStorage.getItem("authUser");

        if (storedToken && storedUser) {
          // Validamos que el token sea válido
          const validUser = await mockAuthService.validateToken(storedToken);

          if (validUser) {
            setToken(storedToken);
            setUser(validUser);
          } else {
            // Token inválido, limpiar
            localStorage.removeItem("authToken");
            localStorage.removeItem("authUser");
          }
        }
      } catch (err) {
        console.error("Error inicializando autenticación:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const authToken = await mockAuthService.login(credentials);

      // Persistir en localStorage
      localStorage.setItem("authToken", authToken.token);
      localStorage.setItem("authUser", JSON.stringify(authToken.user));

      // Actualizar estado
      setToken(authToken.token);
      setUser(authToken.user);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error en el login";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);

    try {
      await mockAuthService.logout();

      // Limpiar localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");

      // Actualizar estado
      setToken(null);
      setUser(null);
      setError(null);
    } catch (err) {
      console.error("Error en logout:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated: !!user && !!token,
    login,
    logout,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
