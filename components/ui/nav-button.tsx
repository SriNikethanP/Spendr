import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size={"sm"}
      variant={"outline"}
      className={cn(
        "w-full lg:w-auto justify-between text-white hover:text-white hover:bg-white/15 border-none outline-none font-normal focus-visible:ring-offset-0 focus-visible:ring-transparent  transition ",
        isActive ? "bg-white/35 text-white" : "bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
