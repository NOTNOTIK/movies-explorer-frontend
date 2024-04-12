import { Navigate } from "react-router";

function ProtectedRoute({ children, ...props }) {
  return <>{props.loggedIn ? children : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
