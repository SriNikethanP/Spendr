"use client";

import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "./nav-button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { useMedia } from "react-use";
import { useState } from "react";
import { Button } from "./button";
import { Menu } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width:1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            size={"sm"}
            variant={"outline"}
            className="text-white border-none outline-none focus-visible:ring-transparent
          focus-visible:ring-offset-0 hover:text-white hover:bg-white/20 bg-white/10 font-normal transition focus:bg-white/30"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="px-2">
          <nav className="flex flex-col gap-y-2 pt6">
            {routes.map((route) => {
              return (
                <Button
                  key={route.href}
                  variant={route.href === pathname ? "secondary" : "ghost"}
                  onClick={() => onClick(route.href)}
                  className="w-full justify-start"
                >
                  {route.label}
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className=" hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => {
        return (
          <NavButton
            key={route.href}
            href={route.href}
            label={route.label}
            isActive={pathname === route.href}
          />
        );
      })}
    </nav>
  );
};
