"use client";
import ComingSoon from "@/components/ComingSoon";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { projects } from "@/config/configurations";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@company/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const Work = () => {
  const [project, setProjects] = useState(projects[0]);

  const handleProjectChange = (swiper) => {
    //get current slide's index
    console.log(swiper);
    const currentIndex = swiper.activeIndex;
    //set project to the current slide's index
    console.log(currentIndex);
    setProjects(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        // transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="text-6xl font-extrabold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-medium leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/50">{project.description}</p>
              {/* stack */}
              <ul className="flex grid grid-cols-5 gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm text-accent">
                      {item.label}
                      {index !== project.stack?.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border-b-2 border-white/20 w-full"></div>
              {/* button */}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center xl:h-[480px] h-[80px]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="mb-12 w-[120px] h-[24px]" // fixed width and height
            onSlideChange={handleProjectChange}
          >
            {projects.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center w-full h-full"
              >
                <div className="w-[120px] h-[24px] flex justify-center items-center bg-accent rounded-full"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
