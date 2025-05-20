import React, { useEffect, useState, createContext, useContext } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  loading: true,
});

/**
 * Provider component that wraps the application and manages authentication state.
 *
 * On initial load, it checks `localStorage` for the stored login state and updates the internal state accordingly.
 * It also persists any login state changes back to `localStorage`.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Components that will have access to the AuthContext.
 *
 * @returns {JSX.Element} A context provider that shares authentication state with its children.
 *
 * @example
 * import { useAuthContext } from '@/contexts/AuthContext';
 * const { isLoggedIn, setIsLoggedIn, loading } = useAuthContext();
 *
 * <AuthProvider>
 *   <App />
 * </AuthProvider>
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoginState === 'true');
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
