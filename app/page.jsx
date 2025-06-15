"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              Hello World! I'm <br />
              <span className="text-accent hover:bg-accent hover:text-primary transition-all duration-300">
                Khuzaima Pishori
              </span>
            </h1>
            <p className="max-w-[500px] mt-5 mb-9 text-white/80">
              I build smart, user-friendly web experiences with a passion for
              clean code 👨‍💻, games 🎮, and AI 🤖.
            </p>

            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="md"
                className="uppercase flex items-center gap-2 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
