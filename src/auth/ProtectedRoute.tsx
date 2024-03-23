import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (user) {
    return children;
  }

  navigate("/login");
  return null;
};

export default ProtectedRoute;
