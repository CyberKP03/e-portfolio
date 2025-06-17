"use client";
import { reversedIndex, stairAnimation } from "@/config/configurations";
import { motion } from "framer-motion";

const Stairs = () => {
  return (
    <>
      {/*render 6 motionb divs,e ach representing a step of the stairs
  Each div will have the sme animation defined in the stairAnimation object.
  the delay of each div is calculated dynamically based on it's reversed index.
  creating a staggered effect. with decreasing delay for each step.
  */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reversedIndex(index) * 0.1,
            }}
            className={`h-full w-full bg-white relative`}
          />
        );
      })}
    </>
  );
};

export default Stairs;
