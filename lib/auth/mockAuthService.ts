// Mock de usuarios para desarrollo
const MOCK_USERS = [
  {
    id: "1",
    email: "user@example.com",
    password: "password123",
    name: "Juan Pérez",
  },
  {
    id: "2",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
  },
];

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthToken {
  token: string;
  user: User;
  expiresIn: number; // timestamp
}

// Simulamos una llamada a API con delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockAuthService = {
  // Mock login - reemplaza esto con tu API real
  async login(credentials: LoginCredentials): Promise<AuthToken> {
    await delay(800); // Simulamos latencia de red

    const user = MOCK_USERS.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error("Email o contraseña inválidos");
    }

    // Generamos un token mock
    const token = btoa(`${user.id}:${Date.now()}`);
    const expiresIn = Date.now() + 24 * 60 * 60 * 1000; // 24 horas

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      expiresIn,
    };
  },

  // Mock logout - aquí iría llamada a API para invalidar token
  async logout(): Promise<void> {
    await delay(200);
    // Aquí harías llamada a tu API de logout
  },

  // Validar si el token es válido
  async validateToken(token: string): Promise<User | null> {
    await delay(200);

    try {
      // Decodificamos el token mock
      const decoded = atob(token);
      const [userId] = decoded.split(":");

      const user = MOCK_USERS.find((u) => u.id === userId);
      if (!user) return null;

      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    } catch (error) {
      return null;
    }
  },

  // Obtener usuario actual (cuando tienes token)
  async getCurrentUser(token: string): Promise<User | null> {
    return this.validateToken(token);
  },
};
