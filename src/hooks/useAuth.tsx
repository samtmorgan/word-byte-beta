import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// this hook is extracted to support vite's HMR
export default function useAuth() {
  return useContext(AuthContext);
}
