import { useAuth } from '../hooks/useAuth';

export default function Profile() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      <button type="button" onClick={logout}>
        Log in
      </button>
    </div>
  );
}
