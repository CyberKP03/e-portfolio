"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/config/content";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setIsOpen(false); // Close sheet on link click
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Use the links below to navigate.
        </SheetDescription>

        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleNavClick}>
            <h1 className="text-4xl font-semi-bold">
              Khu<span className="text-accent">.zip</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = pathname === link?.path;

            return (
              <Link
                key={index}
                href={link?.path}
                onClick={handleNavClick}
                className={`${
                  isActive ? "text-accent" : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link?.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
