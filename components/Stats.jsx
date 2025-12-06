"use client";

import CountUp from "react-countup";
import { stats } from "@/config/configurations";

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats?.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item?.num}
                  duration={9}
                  delay={index * 0.5}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                {item?.num < 10 ? "+" : null}
                <p
                  className={`${
                    item?.text?.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item?.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
