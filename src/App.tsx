import { Route, BrowserRouter, Routes } from "react-router-dom";
import routes from "./router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
