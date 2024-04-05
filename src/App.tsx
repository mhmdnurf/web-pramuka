import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/admin/Login";
import Portofolio from "./Portofolio";
import ProtectedRoute from "./auth/ProtectedRoute";
import AddPrestasi from "./components/admin/AddPrestasi";
import EditPrestasi from "./components/admin/EditPrestasi";
import AddStruktur from "./components/admin/AddStruktur";
import EditStruktur from "./components/admin/EditStruktur";
import AddAnggota from "./components/admin/AddAnggota";
import AddGallery from "./components/admin/AddGallery";
import EditGallery from "./components/admin/EditGallery";

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
        <Route
          path="/addStruktur"
          element={
            <ProtectedRoute>
              <AddStruktur />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editStruktur/:id"
          element={
            <ProtectedRoute>
              <EditStruktur />
            </ProtectedRoute>
          }
        />
        <Route
          path="/daftar-anggota"
          element={
            <ProtectedRoute>
              <AddAnggota />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addGallery"
          element={
            <ProtectedRoute>
              <AddGallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editGallery/:id"
          element={
            <ProtectedRoute>
              <EditGallery />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
