"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useLoader } from "@/contexts/LoaderContext";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname();
  const { startLoading, isLoading } = useLoader();

  const handleHireMeClick = (e) => {
    // Don't navigate if already on contact page or if loading
    if (pathname === "/contact" || isLoading) {
      e.preventDefault();
      return;
    }
    
    // Start the loader
    startLoading();
  };

  return (
    <header className="container mx-auto py-8 text-white">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-semi-bold relative group cursor-pointer">
            {/* <span className="opacity-100 hover:opacity-0 transition-opacity duration-300"> */}
            <span className="text-white group-hover:text-accent transition-all">
              Khu
            </span>
            <span className="text-accent group-hover:text-white transition-all">
              .zip
            </span>
            {/* </span> */}
            {/* <span className="opacity-0 hover:opacity-100 transition-opacity duration-300">
              Khuzaima Pishori
            </span> */}
          </h1>
        </Link>
        <span className="mx-2 text-md truncate text-white xl:text-xl">
          Software Development Engineer
        </span>
        {/* desktop nav & hire me button */}
        {/* <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact" onClick={handleHireMeClick}>
            <Button 
              className={`bg-accent text-black hover:bg-green-400 ${
                isLoading ? "opacity-50 pointer-events-none" : ""
              }`}
              disabled={isLoading}
            >
              Contact Me
            </Button>
          </Link>
        </div> */}

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
