"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/config/configurations";

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const pathname = usePathname();
        console.log(pathname);

        const isActive = pathname === link?.path;
        return (
          <Link
            key={index}
            href={link?.path}
            className={`${
              isActive && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link?.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
