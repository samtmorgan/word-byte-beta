// import { Routes, Route, useRoutes } from "react-router-dom";

import "./index.css";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import { ProtectedRoute } from "./components/ProtectedRoute";
// import Test from "./pages/Test";
// import Settings from "./pages/Settings";

// export default function App() {
//   const routes = useRoutes([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/signup",
//       element: <SignUp />,
//     },
//     {
//       path: "/test",
//       element: (
//         <ProtectedRoute>
//           <Test />
//         </ProtectedRoute>
//       ),
//     },
//     {
//       path: "/settings",
//       element: (
//         <ProtectedRoute>
//           <Settings />
//         </ProtectedRoute>
//       ),
//     },
//     {
//       path: "/profile",
//       element: (
//         <ProtectedRoute>
//           <Settings />
//         </ProtectedRoute>
//       ),
//     },
//     {
//       path: "*",
//       element: <Login />,
//     },
//   ]);
//   return routes;
//   //   return (
//   //     <Routes>
//   //       <Route path="/" element={<Home />} />
//   //       <Route path="/login" element={<Login />} />
//   //     </Routes>
//   //   );
// }

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import Home from "./pages/Home";
import Test from "./pages/Test";
import RequireAuth from "./components/RequireAuth";
import ErrorPage from "./pages/ErrorPage";
import Settings from "./pages/Settings";
import Layout from "./context/Layout";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route
            path="/test"
            element={
              <RequireAuth>
                <Test />
              </RequireAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

// function Layout() {
//   return (
//     <div>
//       <AuthStatus />

//       <ul>
//         <li>
//           <Link to="/">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>

//       <Outlet />
//     </div>
//   );
// }

// interface AuthContextType {
//   user: any;
//   signin: (user: string, callback: VoidFunction) => void;
//   signout: (callback: VoidFunction) => void;
// }

// let AuthContext = React.createContext<AuthContextType>(null!);

// function AuthProvider({ children }: { children: React.ReactNode }) {
//   let [user, setUser] = React.useState<any>(null);

//   let signin = (newUser: string, callback: VoidFunction) => {
//     return fakeAuthProvider.signin(() => {
//       setUser(newUser);
//       callback();
//     });
//   };

//   let signout = (callback: VoidFunction) => {
//     return fakeAuthProvider.signout(() => {
//       setUser(null);
//       callback();
//     });
//   };

//   let value = { user, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// function useAuth() {
//   return React.useContext(AuthContext);
// }

// function AuthStatus() {
//   let auth = useAuth();
//   let navigate = useNavigate();

//   if (!auth.user) {
//     return <p>You are not logged in.</p>;
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// }

// function RequireAuth({ children }: { children: JSX.Element }) {
//   const auth = useAuth();
//   const location = useLocation();

//   React.useEffect(() => {
//     console.log("RequireAuth: auth.user", auth.user);
//   }, [auth.user]);

//   if (!auth.user) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// }

// function LoginPage() {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let auth = useAuth();

//   let from = location.state?.from?.pathname || "/";

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     let formData = new FormData(event.currentTarget);
//     let username = formData.get("username") as string;

//     auth.signin(username, () => {
//       // Send them back to the page they tried to visit when they were
//       // redirected to the login page. Use { replace: true } so we don't create
//       // another entry in the history stack for the login page.  This means that
//       // when they get to the protected page and click the back button, they
//       // won't end up back on the login page, which is also really nice for the
//       // user experience.
//       navigate(from, { replace: true });
//     });
//   }

//   return (
//     <div>
//       <p>You must log in to view the page at {from}</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username: <input name="username" type="text" />
//         </label>{" "}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
