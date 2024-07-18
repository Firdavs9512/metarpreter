import { NavItem } from "@/types/nav-item";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Open Port Check",
    href: "/dashboard/open-port-check",
    icon: "server",
    label: "open-port-check",
  },

  {
    title: "Separator",
    separator: true,
  },

  {
    title: "Dns lookup",
    href: "/dashboard/dns-lookup",
    icon: "trendingUp",
    label: "dns-lookup",
  },
  
  {
    title: "Separator",
    separator: true,
  },

  {
    title: "Fuzz url",
    href: "/dashboard/fuzz-url",
    icon: "repeat",
    label: "fuzz-url",
  },
  {
    title: "Fuzz host",
    href: "/dashboard/fuzz-host",
    icon: "creditCard",
    label: "fuzz-host",
  },

  {
    title: "Separator",
    separator: true,
  },
  
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "settings",
    label: "settings",
  },
];
