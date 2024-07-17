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
    title: "PTC Ads",
    href: "/dashboard/ptc-ads",
    icon: "galleryVerticalEnd",
    label: "ptc-ads",
  },

  {
    title: "Separator",
    separator: true,
  },

  {
    title: "Leaders",
    href: "/dashboard/leaders",
    icon: "trendingUp",
    label: "leaders",
  },
  {
    title: "Support Center",
    href: "/contact",
    icon: "messageSquareText",
    label: "support-center",
  },
  {
    title: "Referrals",
    href: "/dashboard/referrals",
    icon: "userPlus",
    label: "referrals",
  },
  {
    title: "Separator",
    separator: true,
  },
  {
    title: "Deposit & Exchange",
    href: "/dashboard/deposit-exchange",
    icon: "repeat",
    label: "deposit-exchange",
  },
  {
    title: "Withdraw",
    href: "/dashboard/withdraw",
    icon: "creditCard",
    label: "withdraw",
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: "presentation",
    label: "history",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "settings",
    label: "settings",
  },
];
