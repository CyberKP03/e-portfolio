"use client";

import {
  experience,
  skillsForResume,
  education,
  aboutForResume,
} from "@/config/content";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import ComingSoon from "./ComingSoon";

const ContentForTabs = ({ tabValue }) => {
  switch (tabValue) {
    case "experience":
      return (
        <div>
          {experience.map((exp, expIndex) => (
            <div
              key={`exp-${expIndex}`}
              className="flex flex-col gap-[30px] text-center xl:text-left"
            >
              <h3 className="text-4xl font-bold">{exp.title}</h3>
              <p className="text-white/60 mx-auto xl:mx-0">{exp.description}</p>
              <ScrollArea className="h-[400px] rounded-xl">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {exp.items.map((item, itemIndex) => {
                    return (
                      <li
                        key={`${expIndex}-${itemIndex}`}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          ))}
        </div>
      );
    case "education":
      return (
        <div>
          {education.map((edu, eduIndex) => (
            <div
              key={`edu-${eduIndex}`}
              className="flex flex-col gap-[30px] text-center xl:text-left"
            >
              <h3 className="text-4xl font-bold">{edu.title}</h3>
              <p className="text-white/60 mx-auto xl:mx-0">{edu.description}</p>
              <ScrollArea className="h-[400px] rounded-xl">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {edu.items.map((item, itemIndex) => {
                    return (
                      <li
                        key={`${eduIndex}-${itemIndex}`}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[600px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          ))}
        </div>
      );
    case "skillsForResume":
      return (
        <div className="flex flex-col gap-[30px]">
          {skillsForResume.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className="flex flex-col gap-[30px]  text-center xl:text-left"
            >
              <h3 className="text-4xl font-bold">{skill.title}</h3>
              <p className="text-white/60 mx-auto xl:mx-0">
                {skill.description}
              </p>
              <ScrollArea className="h-[400px] rounded-xl">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skill.skillList.map((item, itemIndex) => {
                    return (
                      <li key={`${skillIndex}-${itemIndex}`}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            {/* <TooltipTrigger className="w-[90px] h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group"> */}
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group relative">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 mt-6">
                                {item.icon}
                              </div>
                              <div className="text-white text-sm capitalize mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.name}
                              </div>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          ))}
        </div>
      );
    case "aboutForResume":
      return (
        <div className="flex flex-col gap-[30px]">
          {aboutForResume.map((about, aboutIndex) => (
            <div
              className="flex flex-col gap-[30px] text-center xl:text-left"
              key={aboutIndex}
            >
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-2"
                    >
                      <span className="text-white/40">{item.fileName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      );
    default:
      return <ComingSoon />;
  }
};

export default ContentForTabs;
