/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  let isTrue = isAuthenticated();
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (isTrue) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
