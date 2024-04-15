import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("isLogin");
  return <> {loggedIn ? children : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
