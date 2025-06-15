"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    const pathName = usePathname();
  return (
  <AnimatePresence>
    <div key={pathName}>
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0, transition: {delay: 0.7, duration: 0.3, ease:"easeInOut"}, }} className="h-screen w-screen fixed bg-primary top-0 pointer-events-none " />

    </div>
    {children}
    </AnimatePresence>
    );
};

export default PageTransition;
