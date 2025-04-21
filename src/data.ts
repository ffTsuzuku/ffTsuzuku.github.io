import Javscript from "./imgs/icons/Javascript";
import Laravel from "./imgs/icons/Laravel";

import pomodoroScreenshot1 from "./imgs/projects/mbpomodoro/s1.webp";
//import pomodoroScreenshot2 from "./imgs/projects/mbpomodoro/s2.webp";
//import pomodoroScreenshot3 from "./imgs/projects/mbpomodoro/s3.webp";

import mbblocker1 from "./imgs/projects/mbblocker/1.png";

//import tictactoe1 from "./imgs/projects/tic_tac_toe/site.png";
//import tictactoe2 from "./imgs/projects/tic_tac_toe/board.png";
//import tictactoe3 from "./imgs/projects/tic_tac_toe/game_over.png";

import githubsearch1 from "./imgs/projects/github_search/screenshot.webp";

import LinkedIn from "./imgs/icons/LinkedIn";
import Github from "./imgs/icons/Github";
import Java from "./imgs/icons/Java";
import NodeJs from "./imgs/icons/NodeJs";
import PHP from "./imgs/icons/PHP";
import Python from "./imgs/icons/Python";
import React from "./imgs/icons/React";
import TypeScript from "./imgs/icons/Typescript";
import ChakraUI from "./imgs/icons/ChakraUI";
import HTML5 from "./imgs/icons/HTML5";
import CSS3 from "./imgs/icons/CSS3";
import Tailwind from "./imgs/icons/Tailwind";
import Redux from "./imgs/icons/Redux";
import Vite from "./imgs/icons/Vite";
import Webpack from "./imgs/icons/Webpack";
import GIT from "./imgs/icons/Git";
import { ColorMode } from "@chakra-ui/react";

export interface Work {
  companyName: string;
  title: string;
  period: string;
  responsibilities: string[];
  blurb: string;
  tech: string[];
}

export type SkillType = "Frontend" | "Backend" | "Languages" | "Tools";

export interface Skill {
  name: string;
  proficiency: number;
  icon: ({ size, style, fill }) => JSX.Element;
  iconFill?: string;
  iconBoxColor?: Record<ColorMode, string>;
  stroke?: string;
}

interface School {
  institution: string;
  level: string;
  period: string;
  major: string;
}

interface Project {
  name: string;
	screenshots: {image: string}[];
  description: string;
  github: string;
}

interface User {
  name: string;
  workExperience: Work[];
  techStack: Record<SkillType, Skill[]>;
  education: School[];
  projects: Project[];
}

interface Social {
  name: string;
  icon: () => JSX.Element;
  link: string;
}

const social_media: Social[] = [{
  name: "LinkedIn",
  link: "https://www.linkedin.com/in/gagandeep-sandhu-062871191",
  icon: LinkedIn,
}, {
  name: "Github",
  link: "https://github.com/ffTsuzuku",
  icon: Github,
}];

const data: User = {
  name: "Deep Sandhu",
  workExperience: [
    {
      companyName: "EarthCam",
      title: "Senior Full Stack Web Developer",
      period: "August 2020 - Present",
      responsibilities: [
        "Lead front-end and back-end developer, involved with making Tech Stack decisions. Designing REST APIs to facilitate efficient communication between client and server components. Mentored 6 junior developers by conducting code reviews and holding one-on-one meetings to assist with tickets and address any concerns.",
        "Wrote a Web gallery application that incorporates AI object detection, AI based filtering, and weather tracking. Its being used within Amazon Facilities and many other high profile construction projects. And was commended by management as having contributed to a boost in sales and client acquisition.",
        "Revamped the company's Legacy CRM system, drastically improving overall performance by optimizing MySQL queries and reducing page loading times on average from 3 minutes down to 200 milliseconds. Implemented robust security measures including middleware, guards, and policies,  and two-factor authentication using Twilio to prevent unauthorized access and data modification. Additionally, introduced safeguards to mitigate issues related to flooding the system with erroneous data.",
        "Wrote a Google Photos like application that allows customers to not only upload photos but also import them from 3rd party applications such as Salesforce, Procore, and Autodesk.",
        "Wrote a BIM Model Viewer that allows customers to traverse through 3D renderings of their facilities.",
        "Maintain and oversee 8 front-end repositories and 2 back-end repositories within the company's codebase, ensuring code quality and consistency.",
      ],
      "blurb":
        "Lead developer across front-end and back-end systems, driving tech stack decisions and mentoring a team of 6. Built enterprise-grade applications, including an AI-powered photo gallery used by Amazon and major construction projects, and a Google Photos-style media manager with third-party integrations. Revamped legacy CRM to improve performance by over 99%, adding advanced security and reducing load times from 3 minutes to 200ms. Developed a 3D BIM viewer for client facilities and maintain 10+ production repositories with a focus on code quality and architecture.",
      "tech": [
        "React",
        "Javascript",
        "TypeScript",
        "Redux",
        "CSS3",
        "HTML",
        "PHP",
        "Laravel",
        "Python",
        "Node.js",
        "MySQL",
      ],
    },
    {
      companyName: "Medical Lab Management",
      title: "Contracted Software Developer",
      period: "Sept 2019 - Nov 2019",
      responsibilities: [
        "Contracted to assist the company in meeting their MVP release deadline.",
        "Developed an analytics dashboard utilizing Highcharts, enabling clients to visually interpret data effectively.",
        "Wrote and refactored MySQL queries to generate data for the dashboards, ensuring accuracy and efficiency.",
      ],
      "blurb":
        "Brought on to help meet an MVP release deadline. Built a data analytics dashboard with Highcharts for intuitive client insights and refactored MySQL queries to ensure fast, accurate data generation.",
      "tech": [
        "Vue",
        "Javascript",
        "TypeScript",
        "CSS3",
        "HTML",
        "PHP",
        "Laravel",
        "Node.js",
        "MySQL",
      ],
    },
    {
      companyName: "Case Medical",
      title: "Full Stack Software Developer",
      period: "Jan 2018 - Sept 2019",
      responsibilities: [
        "Contributed to the development of a specialized software solution for tracking the sterilization cycle of instruments within hospital facilities.",
        "Led a team of 3 developers, providing mentorship, conducting code reviews, and resolving technical issues to ensure project success.",
        "In charge of making the design choices for what tech stack and tools our enterprise software should be developed in. ",
        "Maintained open communication channels between upper management and the development team to ensure alignment with project goals and priorities",
      ],
      blurb:
        "Built and maintained core front-end and back-end features for a hospital sterilization tracking system, including designing RESTful APIs to support critical workflows. Led a team of 3 developers, made key tech stack decisions, and served as the bridge between engineering and upper management to keep projects aligned with business goals.",
      tech: [
        "React",
        "Javascript",
        "TypeScript",
        "Redux",
        "CSS3",
        "HTML",
        "PHP",
        "Laravel",
        "Python",
        "Node.js",
        "MySQL",
      ],
    },
    {
      companyName: "Case Medical",
      title: "Full Stack Junior Developer",
      period: "Sept 2017 - Dec 2017",
      responsibilities: [
        "Developed an internal Messaging Application to be used by the companies Sales Reps.",
        "Worked as both a Project Manager and Software developer, and helped mediate between management stakeholders, and the software team.",
        "Implemented and maintained Agile and Scrum methodologies within the development team, ensuring efficient, project management and adherence to timelines.",
      ],
      "blurb":
        "Developed an internal messaging app for the sales team, while also acting as a Project Manager to bridge communication between stakeholders, management, and developers. Implemented Agile and Scrum methodologies to ensure efficient project delivery and timeline adherence.",
      tech: [
        "React",
        "Javascript",
        "TypeScript",
        "Redux",
        "CSS3",
        "HTML",
        "PHP",
        "Laravel",
        "Python",
        "Node.js",
        "MySQL",
        "RabbitMQ",
      ],
    },
  ],
  techStack: {
    Backend: [
      {
        name: "Node",
        proficiency: 100,
        icon: NodeJs,
        iconFill: "#689f63",
        iconBoxColor: {
          light: "#d3e4d6",
          dark: "#223627",
        },
      },
      {
        name: "Laravel",
        proficiency: 100,
        icon: Laravel,
        iconFill: "#ff2d20",
        iconBoxColor: {
          light: "#e4d7cf",
          dark: "#e4d7cf",
        },
      },
    ],
    Frontend: [
      {
        name: "React",
        proficiency: 100,
        icon: React,
        iconFill: "#61dafb",
        iconBoxColor: {
          light: "#d6ecee",
          dark: "#1a2c37",
        },
      },
      {
        name: "Chakra UI",
        proficiency: 100,
        icon: ChakraUI,
        iconFill: "gold",
        iconBoxColor: {
          light: "#fcfbd0",
          dark: "#363d25",
        },
      },
      {
        name: "Redux",
        proficiency: 100,
        icon: Redux,
        iconFill: "transparent",
        stroke: "#764abc",
        iconBoxColor: {
          light: "#d4ceee",
          dark: "#262b3f",
        },
      },
      {
        name: "Tailwind",
        proficiency: 100,
        icon: Tailwind,
        iconFill: "#00bcff",
        iconBoxColor: {
          light: "#cee4e2",
          dark: "#1a2c37",
        },
      },
      {
        name: "HTML",
        proficiency: 100,
        icon: HTML5,
        iconFill: "#e44d27",
        iconBoxColor: {
          light: "#e4d7cf",
          dark: "#e4d7cf",
        },
      },
      {
        name: "CSS3",
        proficiency: 100,
        icon: CSS3,
        iconFill: "#214ce5",
        iconBoxColor: {
          light: "#c9d5eb",
          dark: "#18273c",
        },
      },
    ],
    Tools: [
      {
        name: "Vite",
        proficiency: 100,
        icon: Vite,
        iconFill: "#fcfbd0",
        iconBoxColor: {
          light: "#d4e0ee",
          dark: "#363d25",
        },
      },
      {
        name: "Webpack",
        proficiency: 100,
        icon: Webpack,
        iconFill: "#569ac8",
        iconBoxColor: {
          light: "#c9dde5",
          dark: "#1a2c37",
        },
      },
      {
        name: "GIT",
        proficiency: 100,
        icon: GIT,
        iconFill: "#f05133",
        iconBoxColor: {
          light: "#e4d7cf",
          dark: "#e4d7cf",
        },
      },
    ],
    Languages: [
      {
        name: "Javascript",
        proficiency: 100,
        icon: Javscript,
        iconFill: "#fcdc00",
        iconBoxColor: {
          light: "#fcfbd0",
          dark: "#363d25",
        },
      },
      {
        name: "TypeScript",
        proficiency: 100,
        icon: TypeScript,
        iconFill: "#3178c6",
        iconBoxColor: {
          light: "#c8dde6",
          dark: "#1a2c37",
        },
      },
      {
        name: "PHP",
        proficiency: 100,
        icon: PHP,
        iconFill: "#8892bf",
        iconBoxColor: {
          dark: "#262b3f",
          light: "#d8d8ed",
        },
      },
      {
        name: "Python",
        proficiency: 50,
        icon: Python,
        iconFill: "#254f73",
        iconBoxColor: {
          light: "#c9d5eb",
          dark: "#1a2c37",
        },
      },
      {
        name: "Java",
        proficiency: 60,
        icon: Java,
        iconFill: "#ec2025",
        iconBoxColor: {
          light: "#e4d7cf",
          dark: "#e4d7cf",
        },
      },
    ],
  },
  projects: [
    {
      name: "Github Search",
      screenshots: [{ image: githubsearch1 }],
      //description: "This repository provides a beautiful interface for searching for repositories belonging to a user or organization. Use the filters and sorting tools to quickly find and organize repositories.",
      description: "A search interface for finding repositories tied to a user or org",
      github: "https://github.com/ffTsuzuku/github_search?tab=readme-ov-file",
    },
    /**{
      name: "Tic Tac Toe",
      screenshots: [
        { image: tictactoe1 },
        { image: tictactoe2 },
        { image: tictactoe3 },
      ],
      description:
        "This project serves as a demonstration of various state management techniques and optimization strategies commonly used in React applications. Whether you're new to React or looking to enhance your understanding of state management, this repository aims to provide clear examples and explanations for educational purposes.",
      github: "https://github.com/ffTsuzuku/tic-tac-toe",
    },**/
    {
      name: "MBBlocker",
      screenshots: [{ image: mbblocker1 }],
      //description: "An easy to use and beautiful Chrome Extension for blocking websites. Created to boost my productivity and learn chrome extension development.",
      description: "An easy to use and beautiful Chrome Extension for blocking websites.",
      github: "https://github.com/ffTsuzuku/MBBlocker",
    },
    {
      name: "MBPomodoro",
      screenshots: [
        { image: pomodoroScreenshot1 },
      ],
      //description: "As a software developer, I created a Pomodoro app that provides a more calming and peaceful experience than traditional Pomodoro apps. To achieve this, I incorporated soothing meditation gong sounds as an alternative to the typical disruptive alarm noises. In addition to the calming sounds, the app allows users to customize time presets and easily switch between them. Users can also control the volume of the different sound effects in the app and save their settings locally, eliminating the need for creating an account. To enhance usability, I added gesture controls through Bluetooth headphone integration. This allows users to start and pause the timer with simple gestures, eliminating the need to touch the phone or computer. Through the creation of this app, I have honed my skills in user interface design, audio integration, and mobile application development.",
      description: "Pomodoro app that provides a calming and peaceful experience than other apps.",
      github: "https://github.com/ffTsuzuku/MBPomodoro",
    },
  ],
  education: [
    {
      institution: "NJIT",
      major: "Computer Science",
      level: "Masters",
      period: "2020 - On Hold",
    },
    {
      institution: "NJIT",
      major: "Information Technology",
      level: "Bachlors",
      period: "2012 - 2017",
    },
  ],
};

export default data;
export { social_media };
