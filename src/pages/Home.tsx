// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Home() {
  const auth = useAuth();

  const userIsSignedIn = auth.user !== null;

  //   useEffect(() => {
  //     console.log('Home: userIsSignedIn', userIsSignedIn);
  //     console.log('Home: auth.user', auth.user);
  //   }, [auth.user, userIsSignedIn]);

  return (
    <div>
      {' '}
      <h2>Home</h2>
      {userIsSignedIn ? (
        <>
          <h3>
            Hello
            {auth.user}
          </h3>
          <p>
            <Link to="/test">Test</Link>
          </p>
          <p>
            <Link to="/settings">Settings</Link>
          </p>
          <p>
            <button type="button" onClick={() => auth.signOut()}>
              Sign Out
            </button>
          </p>
        </>
      ) : (
        <>
          <h3>Please login or sign up</h3>
          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/signup">Sign Up</Link>
          </p>
        </>
      )}
    </div>
  );
}
