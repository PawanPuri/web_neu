import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/ContextProvider";
const ProtectedRoute = () => {
  const { token ,user} = useAuth(); // Get user authentication state

  return token && user.role ? <Outlet /> : <Navigate to="/admin" />; // Redirect to admin if not logged in
};

export default ProtectedRoute;
