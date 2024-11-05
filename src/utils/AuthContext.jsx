import { createContext, useState, useContext } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Función para hacer login
  const login = (userData) => {
    setUser(userData);
  };

  // Función para hacer logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar el contexto de autenticación
export function useAuth() {
  return useContext(AuthContext);
}
