import { Navigate, useLocation } from 'react-router-dom';
// import React from 'react';
import useAuth from '../hooks/useAuth';

// this component is used to wrap around any page that requires authentication
export default function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  //   React.useEffect(() => {
  //     console.log('RequireAuth: auth.user', auth.user);
  //   }, [auth.user]);

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
