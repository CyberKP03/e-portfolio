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
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
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

//variants
export const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

export const reversedIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

// Social media icons
export const socials = [
  { icon: <FaGithub />, path: "https://github.com/CyberKP03" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/khuzaima-pishori-312859194/",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@khuzaikistaan1685" },
];

// Statistics section content
export const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 447,
    text: "Cups of Coffee",
  },
  {
    num: 20,
    text: "Technologies Mastered",
  },
];

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
      "Crafting interactive UIs with React, Next.js, and AngularTS, emphasising responsive design, state management, and modern web animations for enhanced user experience.",
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
      "Working with SQL and NoSQL databases, optimising queries, and designing efficient database schemas.",
    href: "",
  },
  {
    num: "05",
    title: "Big Data",
    description:
      "Leveraging GoLang's concurrency features for efficient data processing and analysis, combined with optimised SQL queries for handling large-scale datasets.",
    href: "",
  },
];

//Resume section content
export const listOfTabs = [
  {
    label: "Experience",
    value: "experience",
    class: "w-full",
  },
  {
    label: "Skills",
    value: "skillsForResume",
    class: "w-full h-full",
  },
  {
    label: "Education",
    value: "education",
    class: "w-full",
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
    description: `Hi I am Khuzaima Pishori — a Software Engineer with over 3 years of experience building scalable and intuitive web applications. I focus on front-end interfaces using Angular and TypeScript as well as backend performance enhancements with Java or GoLang. When not coding I am either playing table tennis or chess. I also enjoy exploring the technicalities of the games I play and discovering new AI tools. Let us build something impactful together!`,
    info: [
      {
        fieldName: "Name",
        fieldValue: "Khuzaima Pishori",
        links: "",
      },
      {
        fieldName: "Email",
        fieldValue: "pishorikhuzaima@gmail.com",
        links:
          "https://mail.google.com/mail/?view=cm&fs=1&to=pishorikhuzaima@gmail.com",
      },
      {
        fieldName: "Contact No.",
        fieldValue: "+91 7021633526",
        links: "tel:+917021633526",
      },
      {
        fieldName: "Experience",
        fieldValue: "3+ years",
        links: "",
      },
      // {
      //   fieldName: "Core Skills",
      //   fieldValue:
      //     "Full Stack Development, Frontend Development, API Development, Big Data, Database Management",
      // },
      {
        fieldName: "Nationality",
        fieldValue: "Indian",
        links: "",
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
        company: "Aegon Studio",
        position: "Project Manager",
        duration: "March 2021 - June 2022",
        description: `As one of the founding partners, planning, managing and developing pipeline projects`,
      },
      {
        company: "Storiyaan: Stories that Inspire",
        position: "Head of Web Development",
        duration: "April 2020 - May 2022",
        description: `optimised the official website using advanced WordPress techniques, led a 13-member team, and collaborated with 20+ high-profile personalities while earning multiple performance awards.`,
      },
    ],
  },
];

export const education = [
  {
    icon: "",
    title: "Education",
    description: `Bachelor of Engineering in Computer Science from University of Mumbai through Vidyalankar Institute of Technology, specialising in full-stack development, data structures, and distributed systems with hands-on experience in industry projects.`,
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
    description: `Proficient in a wide range of technologies including Angular, TypeScript, Java, GoLang, and database management systems. Experienced in building scalable web applications and optimising performance.`,
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
        name: "angularTS",
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

//Work section content
export const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Jio CloudXP | Hybrid Cloud Management Platform (HCMP)",
    description: `Working as a Software Development Engineer-I, where I lead the UI team to develop and maintain scalable web applications, while enhancing backend performance, which includes processing Big Data as well.`,
    stack: [
      {
        label: "HTML5",
      },
      {
        label: "Bootstrap",
      },
      {
        label: "AngularTS",
      },
      {
        label: "TypeScript",
      },
      {
        label: "Git",
      },
      {
        label: "Azure DevOps",
      },
      {
        label: "GoLang",
      },
      {
        label: "Java",
      },
      {
        label: "Spring Boot",
      },
      {
        label: "SQL",
      },
    ],
  },
  {
    num: "02",
    category: "frontend / game development",
    title: "Aegon Studio | Official Website",
    description: `Was one of the founding partners, responsible for making the first official version of the website, while planning, managing, and developing pipeline projects, ensuring timely deliverables and quality standards.`,
    stack: [
      {
        label: "Blender",
      },
      {
        label: "Unreal Engine",
      },
      {
        label: "WordPress",
      },
      {
        label: "Figma",
      },
      {
        label: "Parallax.js",
      },
      // Add more work items as needed
    ],
  },
  {
    num: "03",
    category: "frontend",
    title: "Storiyaan | Wordpress Website",
    description: `As the Head of Web Development, developed, modernised and optimised the official website using advanced WordPress techniques, led a 13-member team, and collaborated with 20+ high-profile personalities while earning multiple performance awards.`,
    stack: [
      {
        label: "HTML5",
      },
      {
        label: "CSS3",
      },
      {
        label: "JavaScript",
      },
      {
        label: "WordPress",
      },
      {
        label: "Figma",
      },
    ],
  },
  {
    num: "04",
    category: "frontend / game development",
    title: "Ping Pong | Web Game",
    description: `Developed a simple ping pong game, showcasing my skills in frontend development along with game design.`,
    stack: [
      {
        label: "HTML5",
      },
      {
        label: "CSS3",
      },
      {
        label: "JavaScript",
      },
      {
        label: "p5.js",
      },
    ],
  },
  {
    num: "05",
    category: "fullstack",
    title: "Khuzaima-Pishori-Portfolio | E-Portfolio",
    description: `This website itself reflects my skills, projects, and experience in a modern and responsive design.`,
    stack: [
      {
        label: "HTML5",
      },
      {
        label: "Tailwind CSS",
      },
      {
        label: "JavaScript",
      },
      {
        label: "React (JSX)",
      },
      {
        label: "Next.js",
      },
      {
        label: "Node.js",
      },
    ],
  },
  {
    num: "06",
    category: "fullstack",
    title:
      "Object Detecting Intelli System (O.D.I.S) | Object Detection System",
    description: `Built an AI tool identifying visible objects in real-time with 90% accuracy. It uses a webcam to detect objects and display them on the screen, showcasing my skills in AI and computer vision.`,
    stack: [
      {
        label: "HTML",
      },
      {
        label: "CSS",
      },
      {
        label: "JavaScript",
      },
      {
        label: "OpenCV",
      },
      {
        label: "TensorFlow.js",
      },
      {
        label: "ml5.min.js",
      },
    ],
  },
];

// Add more sections as needed
