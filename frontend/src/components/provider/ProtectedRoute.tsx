import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../ui/loading-animation";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const token = localStorage.getItem("auth_token");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      api.defaults.headers.Authorization = token;
      api
        .get("/dashboard/ping")
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("auth_token");
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return children;
}
