"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { links } from "@/config/configurations";
import { useLoader } from "@/contexts/LoaderContext";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { startLoading, isLoading } = useLoader();

  const handleNavClick = (e, path) => {
    // Don't navigate if already on the same page or if loading
    if (pathname === path || isLoading) {
      e.preventDefault();
      return;
    }
    
    // Start the loader
    startLoading();
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = pathname === link?.path;
        return (
          <Link
            key={index}
            href={link?.path}
            onClick={(e) => handleNavClick(e, link?.path)}
            className={`${
              isActive && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all ${
              isLoading ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {link?.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
