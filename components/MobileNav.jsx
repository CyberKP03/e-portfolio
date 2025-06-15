"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/config/content";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semi-bold">
              Khu<span className="text-accent">.zip</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const pathname = usePathname();
            console.log(pathname);

            const isActive = pathname === link?.path;
            return (
              <Link
                key={index}
                href={link?.path}
                className={`${
                  link?.path === pathname && "text-accent"
                }
                  text-xl capitalize hover:text-accent transition-all`}
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
