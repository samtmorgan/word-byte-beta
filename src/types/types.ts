export type AuthContextType = {
  user: object | null;
  login: (data: object) => void;
  logout: () => void;
};
