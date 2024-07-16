import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const auth = false;

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
}
