import { navItems } from "@/constants/menu";
import { SidebarNav } from "./sidebar-nav";

export function DashboardNavbar() {
  return (
    <nav className="relative hidden h-screen pt-16 overflow-y-auto border-r lg:block w-72 scrollbar__hidden">
      <div className="pt-0 pb-10 space-y-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <SidebarNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
