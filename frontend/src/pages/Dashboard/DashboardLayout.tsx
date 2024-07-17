import { DashboardHeader } from "@/components/shared/layout/header";
import { DashboardNavbar } from "@/components/shared/layout/navbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DashboardHeader />
      <div className="flex h-screen overflow-hidden">
        <DashboardNavbar />
        <main className="w-full pt-16 pl-3 pr-3 overflow-y-auto lg:pr-5">
          {children}
        </main>
      </div>
    </>
  );
}
