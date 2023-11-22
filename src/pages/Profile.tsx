import useAuth from '../hooks/useAuth';

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      <button type="button" onClick={() => signOut()}>
        Log in
      </button>
    </div>
  );
}
