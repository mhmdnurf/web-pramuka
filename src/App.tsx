import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/admin/Login";
import Portofolio from "./Portofolio";
import ProtectedRoute from "./auth/ProtectedRoute";
import AddPrestasi from "./components/admin/AddPrestasi";
import EditPrestasi from "./components/admin/EditPrestasi";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Portofolio />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addPrestasi"
          element={
            <ProtectedRoute>
              <AddPrestasi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editPrestasi/:id"
          element={
            <ProtectedRoute>
              <EditPrestasi />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
