"use client";

import Link from "next/link";
import { useAuth } from "@/lib/hooks/useAuth";
import { useRouter } from "next/navigation";

export function AuthButton() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="px-3 py-2 text-sm font-medium text-gray-600">
        Cargando...
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          ¡Hola,{" "}
          <span className="font-semibold">
            {user?.name || user?.email}
          </span>
          !
        </span>
        <Link
          href="/dashboard"
          className="px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-800"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
    >
      Iniciar sesión
    </Link>
  );
}
