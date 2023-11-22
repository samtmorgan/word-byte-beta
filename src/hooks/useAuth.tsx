import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// this hook is extracted to support vite's HMR
function useAuth() {
  return useContext(AuthContext);
}

export { useAuth };
