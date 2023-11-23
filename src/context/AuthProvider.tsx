import React, { useCallback, useMemo } from 'react';
import fakeAuthProvider from '../auth';
import AuthContext from './AuthContext';

// This provider is in it's own file to support vite's HMR
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(null);

  const signIn = useCallback((newUser: string, callback: VoidFunction) => {
    fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  }, []);

  const signOut = useCallback((callback?: VoidFunction) => {
    fakeAuthProvider.signOut(() => {
      setUser(null);
      if (callback) {
        callback();
      }
    });
  }, []);

  //   useEffect(() => {
  //     console.log('AuthProvider: user', user);
  //   }, [user]);

  const value = useMemo(
    () => ({
      user,
      signIn,
      signOut,
    }),
    // eslint-disable-next-line comma-dangle
    [user, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
