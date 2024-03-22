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
];

export default routes;
