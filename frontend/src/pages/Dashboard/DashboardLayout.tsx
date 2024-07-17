import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>NMap web</h1>
      {children}
    </div>
  );
}
