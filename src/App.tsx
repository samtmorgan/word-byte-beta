import './index.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home';
import Test from './pages/Test';
import RequireAuth from './components/RequireAuth';
import ErrorPage from './pages/ErrorPage';
import Settings from './pages/Settings';
import Layout from './context/Layout';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/test"
            element={(
              <RequireAuth>
                <Test />
              </RequireAuth>
            )}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/settings"
            element={(
              <RequireAuth>
                <Settings />
              </RequireAuth>
            )}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}
