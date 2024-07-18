import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export default function AuthLayout({ children }: PropsWithChildren) {
  const token = localStorage.getItem("auth_token");
  console.log("examolek");

  if (token) {
    return Navigate({ to: "/dashboard" });
  }

  return <>{children}</>;
}
