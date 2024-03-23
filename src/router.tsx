import ProtectedRoute from "./auth/ProtectedRoute";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/admin/Login";
import Portofolio from "./Portofolio";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Portofolio />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];

export default routes;
