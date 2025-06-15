"use client";

import { BsArrowDownLeft } from "react-icons/bs";
import Link from "next/link";
import { skills } from "@/config/content";

import { motion } from "framer-motion";
const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {skills?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent">
                    {item?.num}
                  </div>
                  <Link
                    href={item?.href}
                    className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-135"
                  >
                    <BsArrowDownLeft className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold loading-none text-white group-hover:text-accent transition-all duration-500">
                  {item?.title}
                </h2>
                {/* description */}
                <p className="text-white/60 ">{item?.description}</p>
                {/* border */}
                <div className="border-b-2 border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
