/* eslint-disable @typescript-eslint/ban-ts-comment */
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav-item";
import { Dispatch, SetStateAction } from "react";
import { Icons } from "../icons";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

interface SidebarNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function SidebarNav({ items, setOpen }: SidebarNavProps) {
  const path = window.location.pathname;

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        if (item.separator) {
          return <Separator key={index} />;
        }

        const Icon = Icons[item.icon || "arrowRight"];
        const Badge = item?.badge || (() => null);
        return (
          item.href && (
            <Link
              key={index}
              to={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors justify-between",
                path === item.href ? "bg-accent" : "transparent",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              <span className="flex items-center">
                <Icon className="w-4 h-4 mr-2" />
                <span>{item.title}</span>
              </span>
              {/* @ts-ignore */}
              <Badge />
            </Link>
          )
        );
      })}
    </nav>
  );
}
