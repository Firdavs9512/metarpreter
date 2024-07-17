import { Link } from "react-router-dom";

export function DashboardHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 border-b supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
      <nav className="flex items-center justify-between px-4 h-14">
        <div className="hidden text-2xl font-medium lg:block text-primary">
          <Link to="/dashboard">Metarpreter</Link>
        </div>
        {/* <div className="block lg:!hidden">
          <MobileSidebar />
        </div> */}

        <div className="flex items-center gap-2.5">
          {/* <NotificationButton />
          <ModeToggle />
          <UserNav /> */}
        </div>
      </nav>
    </div>
  );
}
