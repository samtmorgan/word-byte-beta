import { createContext } from 'react';

interface AuthContextType {
  user: string | null;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;
