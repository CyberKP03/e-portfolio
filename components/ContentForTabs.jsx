import { experience } from "@/config/content";
import { ScrollArea } from "@/components/ui/scroll-area";
import { education } from "@/config/content";

const ContentForTabs = (tabValue) => {
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
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {exp.description}
              </p>
              <ScrollArea className="h-[400px] rounded-xl">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {exp.items.map((item, itemIndex) => {
                    return (
                      <li
                        key={`item-${itemIndex}`}
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
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {education.description}
          </p>
          <ScrollArea className="h-[400px] rounded-xl">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.items.map((item, itemIndex) => (
                <li
                  key={`edu-item-${itemIndex}`}
                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.institution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      );
  }
};

export default ContentForTabs;
