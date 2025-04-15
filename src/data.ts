import Javscript from "./imgs/icons/Javascript";
import Laravel from "./imgs/icons/Laravel";

import pomodoroScreenshot1 from "./imgs/projects/mbpomodoro/s1.webp";
import pomodoroScreenshot2 from "./imgs/projects/mbpomodoro/s2.webp";
import pomodoroScreenshot3 from "./imgs/projects/mbpomodoro/s3.webp";

import mbblocker1 from "./imgs/projects/mbblocker/1.png";

//import tictactoe1 from "./imgs/projects/tic_tac_toe/site.png";
//import tictactoe2 from "./imgs/projects/tic_tac_toe/board.png";
//import tictactoe3 from "./imgs/projects/tic_tac_toe/game_over.png";

import githubsearch1 from "./imgs/projects/github_search/screenshot.webp";

import { CarouselImage } from "./components/ImageCarousel";
import LinkedIn from "./imgs/icons/LinkedIn";
import Github from "./imgs/icons/Github";
import Java from "./imgs/icons/Java";
import NodeJs from "./imgs/icons/NodeJs";
import PHP from "./imgs/icons/PHP";
import Python from "./imgs/icons/Python";
import React from "./imgs/icons/React";
import TypeScript from "./imgs/icons/Typescript";
import ChakraUI from "./imgs/icons/ChakraUI";

interface Work {
  companyName: string;
  title: string;
  period: string;
  responsibilities: string[];
}

interface Skill {
  name: string;
  proficiency: number;
  icon: ({size, style, fill}) => JSX.Element;
  iconFill?: string;
}

interface School {
  institution: string;
  level: string;
  period: string;
  major: string;
}

interface Project {
  name: string;
  screenshots: CarouselImage[];
  description: string;
  github: string;
}

interface User {
  name: string;
  workExperience: Work[];
  techStack: Skill[];
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
    },
  ],
  techStack: [
    {
      name: "Javascript",
      proficiency: 100,
      icon: Javscript,
      iconFill: "#fcdc00",
    },
    {
      name: "TypeScript",
      proficiency: 100,
      icon: TypeScript,
      iconFill: "#3178c6",
    },
    {
      name: "React",
      proficiency: 100,
      icon: React,
      iconFill: "#61dafb",
    },
    {
      name: "Node",
      proficiency: 100,
      icon: NodeJs,
      iconFill: "#689f63",
    },
    {
      name: "Chakra UI",
      proficiency: 100,
      icon: ChakraUI,
      iconFill: "gold",
    },
    {
      name: "PHP",
      proficiency: 100,
      icon: PHP,
      iconFill: "#8892bf",
    },
    {
      name: "Laravel",
      proficiency: 100,
      icon: Laravel,
      iconFill: "#ff2d20",
    },
    {
      name: "Python",
      proficiency: 50,
      icon: Python,
      iconFill: "#254f73",
    },
    {
      name: "Java",
      proficiency: 60,
      icon: Java,
      iconFill: "#ec2025",
    },
  ],
  projects: [
    {
      name: "Github Search",
      screenshots: [{ image: githubsearch1 }],
      description:
        "This repository provides a beautiful interface for searching for repositories belonging to a user or organization. Use the filters and sorting tools to quickly find and organize repositories.",
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
      description:
        "An easy to use and beautiful Chrome Extension for blocking websites. Created to boost my productivity and learn chrome extension development.",
      github: "https://github.com/ffTsuzuku/MBBlocker",
    },
    {
      name: "MBPomodoro",
      screenshots: [
        { image: pomodoroScreenshot1 },
        { image: pomodoroScreenshot2 },
        { image: pomodoroScreenshot3 },
      ],
      description:
        "As a software developer, I created a Pomodoro app that provides a more calming and peaceful experience than traditional Pomodoro apps. To achieve this, I incorporated soothing meditation gong sounds as an alternative to the typical disruptive alarm noises. In addition to the calming sounds, the app allows users to customize time presets and easily switch between them. Users can also control the volume of the different sound effects in the app and save their settings locally, eliminating the need for creating an account. To enhance usability, I added gesture controls through Bluetooth headphone integration. This allows users to start and pause the timer with simple gestures, eliminating the need to touch the phone or computer. Through the creation of this app, I have honed my skills in user interface design, audio integration, and mobile application development.",
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
