import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaAngular,
  FaJava,
  FaBootstrap,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";

import { SiGit, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoGoLang,
  BiLogoSpringBoot,
  BiLogoBlender,
} from "react-icons/bi";

import { VscAzureDevops } from "react-icons/vsc";
import { ScrollArea } from "@/components/ui/scroll-area";

//Meta information for the website
export const metadata = {
  title: "Khuzaima Pishori | E-Portfolio",
  description: "Creating a better web, one line of code at a time.",
};

//Menu items for the website
export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "skills",
    path: "/skills",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

// Skills section content
export const skills = [
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "Experienced at building end-to-end web applications using AngularTS, React, Next.js, Node.js, GoLang, JavaSTS, and Oracle, with expertise in system architecture and cloud deployment strategies.",
    href: "",
  },
  {
    num: "02",
    title: "Modern Frontend Development",
    description:
      "Crafting interactive UIs with React, Next.js, and Angular, emphasizing responsive design, state management, and modern web animations for enhanced user experience.",
    href: "",
  },
  {
    num: "03",
    title: "API Development",
    description:
      "Creating REST APIs with focus on security, performance, and documentation, while scripting and integrating the database queries.",
    href: "",
  },
  {
    num: "04",
    title: "Database Management",
    description:
      "Working with SQL and NoSQL databases, optimizing queries, and designing efficient database schemas.",
    href: "",
  },
  {
    num: "05",
    title: "Big Data",
    description:
      "Leveraging GoLang's concurrency features for efficient data processing and analysis, combined with optimized SQL queries for handling large-scale datasets.",
    href: "",
  },
];

// About section content
export const about = {
  title: "About Me",
  description: `Hi I am Khuzaima Pishori — a Software Engineer with over 3 years of experience building scalable and intuitive web applications. I focus on front-end interfaces using Angular and TypeScript as well as backend performance enhancements with Java or GoLang. At Reliance Jio Platforms Limited I lead the UI team and work on delivering efficient systems. When not coding I am either playing table tennis or on the volleyball court. I also enjoy exploring the technicalities of the games I play and discovering new AI tools. Let us build something impactful together!`,
};

//Resume section content
export const listOfTabs = [
  {
    label: "Experience",
    value: "experience",
    class: "w-full",
  },
  {
    label: "Education",
    value: "education",
    class: "w-full",
  },
  {
    label: "Skills",
    value: "skillsForResume",
    class: "w-full h-full",
  },
  {
    label: "About Me",
    value: "aboutForResume",
    class: "w-full text-center xl:text-left",
  },
];

export const aboutForResume = [
  {
    title: "About Me",
    description: `Hi I am Khuzaima Pishori — a Software Engineer with over 3 years of experience building scalable and intuitive web applications. I focus on front-end interfaces using Angular and TypeScript as well as backend performance enhancements with Java or GoLang. At Reliance Jio Platforms Limited I lead the UI team and work on delivering efficient systems. When not coding I am either playing table tennis or chess. I also enjoy exploring the technicalities of the games I play and discovering new AI tools. Let us build something impactful together!`,
    info: [
      {
        fileName: "Name",
        fieldValue: "Khuzaima Pishori",
      },
      {
        fileName: "Email",
        fieldValue: "pishorikhuzaima@gmail.com",
      },
      {
        fileName: "Contact No.",
        fieldValue: "+91 7021633526",
      },
      {
        fileName: "Experience",
        fieldValue: "3+ years",
      },
      // {
      //   fileName: "Core Skills",
      //   fieldValue:
      //     "Full Stack Development, Frontend Development, API Development, Big Data, Database Management",
      // },
      {
        fileName: "Nationality",
        fieldValue: "Indian",
      },
    ],
  },
];

export const experience = [
  {
    icon: "",
    title: "Experience",
    description: `Developing and Leading scalable web applications, which not only includes Frontend & Backend development, but also big data processing and team management, focusing on planned deliverables, performance and user experience.`,
    items: [
      {
        company: "Reliance Jio Platforms Limited",
        position: "Software Development Engineer-I",
        duration: "July 2022 - Present",
        description: `Leading the UI team to develop and maintain scalable web applications using Angular and TypeScript, while enhancing backend performance with Java and GoLang.`,
      },
      {
        company: "Storiyaan: Stories that Inspire",
        position: "Head of Web Development",
        duration: "April 2020 - May 2022",
        description: `Optimized the official website using advanced WordPress techniques, led a 13-member team, and collaborated with 20+ high-profile personalities while earning multiple performance awards.`,
      },
      {
        company: "Aegon Studio",
        position: "Project Manager",
        duration: "March 2021 - June 2022",
        description: `As one of the founding partners, planning, managing and developing pipeline projects`,
      },
    ],
  },
];

export const education = [
  {
    icon: "",
    title: "Education",
    description: `Bachelor of Engineering in Computer Science from University of Mumbai through Vidyalankar Institute of Technology, specializing in full-stack development, data structures, and distributed systems with hands-on experience in industry projects.`,
    items: [
      {
        institution: "University of Mumbai",
        degree: "Bachelor of Engineering in Computer Science",
        duration: "2018 - 2022",
        description: `Graduated with a focus on software development, data management, and web technologies.`,
      },
      // Add more education items as needed
    ],
  },
];

export const skillsForResume = [
  {
    icon: "",
    title: "Skills",
    description: `Proficient in a wide range of technologies including Angular, TypeScript, Java, GoLang, and database management systems. Experienced in building scalable web applications and optimizing performance.`,
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html5",
      },
      {
        icon: <FaCss3 />,
        name: "css3",
      },
      {
        icon: <FaBootstrap />,
        name: "bootstrap",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind css",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <BiLogoTypescript />,
        name: "typescript",
      },
      {
        icon: <FaAngular />,
        name: "angular",
      },
      {
        icon: <FaReact />,
        name: "react",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <SiGit />,
        name: "git",
      },
      {
        icon: <VscAzureDevops />,
        name: "azure devops",
      },
      {
        icon: <RiVercelLine />,
        name: "vercel",
      },
      {
        icon: <FaJava />,
        name: "java",
      },
      {
        icon: <BiLogoGoLang />,
        name: "golang",
      },
      {
        icon: <BiLogoSpringBoot />,
        name: "spring boot",
      },
      {
        icon: <SiMysql />,
        name: "MySQL",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
      {
        icon: <BiLogoBlender />,
        name: "blender",
      },
      {
        icon: <FaWordpress />,
        name: "wordpress",
      },
    ],
  },
];

// Add more sections as needed
