"use client";

import { listOfTabs } from "@/config/content";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ContentForTabs from "@/components/ContentForTabs";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue={listOfTabs[0]?.value}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs Triggers */}
          <TabsList className="flex flex-col gap-6 w-full max-w-[380px] mx-auto xl:mx-0">
            {listOfTabs.map((tab, index) => (
              <TabsTrigger value={tab.value} key={`trigger-${index}`}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          <div className="min-h-[70vh] w-full">
            {listOfTabs.map((tab, index) => (
              <TabsContent
                value={tab.value}
                key={`content-${index}`}
                className={tab.class}
              >
                <ContentForTabs tabValue={tab.value} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
