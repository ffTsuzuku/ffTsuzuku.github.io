import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiTypescript,
    SiPhp,
    SiLaravel,
    SiPython,
    SiJava,
} from 'react-icons/si'
import { AiFillThunderbolt } from 'react-icons/ai'
import { IconType } from 'react-icons'

import pomodoroScreenshot1 from './imgs/projects/mbpomodoro/s1.png'
import pomodoroScreenshot2 from './imgs/projects/mbpomodoro/s2.png'
import pomodoroScreenshot3 from './imgs/projects/mbpomodoro/s3.png'

import mbblocker1 from './imgs/projects/mbblocker/1.png'

import { CarouselImage } from './components/ImageCarousel'

interface Work {
    companyName: string
    title: string
    period: string
    responsibilities: string[]
}

interface Skill {
    name: string
    proficiency: number
    icon: IconType
    iconFill?: string
}

interface School {
    institution: string
    level: string
    period: string
    major: string
}

interface Project {
    name: string
    screenshots: CarouselImage[]
    description: string
    github: string
}

interface User {
    name: string
    workExperience: Work[]
    techStack: Skill[]
    education: School[]
    projects: Project[]
}

const data: User = {
    name: 'Deep Sandhu',
    workExperience: [
        {
            companyName: 'EarthCam',
            title: 'Senior Full Stack Web Developer',
            period: 'August 2020 - Present',
            responsibilities: [
                'Full Stack Software Developer working in ReactJS, PHP/Laravel, MySQL, Node, TypeScript and some Python.',
                'Was made lead front-end developer of several projects one of which was a web gallery client that allows for advanced AI-Object Detection, AI-Based Filtering, and Weather Tracking, which is being used by Amazon Facilities',
                'Lead Back-end developer in charge of designing and coding the back-end api for a CRM application.',
                'Wrote a BIM Model Viewer that allows customers to view 3D renderings of their facilities both through a web canvas and VR Headset. ',
                'Maintain a large portion of the companies repositories.',
                'Migrated Code Bases from Angular 1 to React, which greatly reduced the number of bugs, and improved application responsiveness',
                'Wrote  build and automation tools that help new hires get started with our code base, also wrote tools that handle our react application deployment.',
                'Created various API endpoints that added functionality such as generating orthomosasic  images and generating customer reports.',
                'Mentoring Junior Developers, helping them with tickets and reviewing their code',
            ],
        },
        {
            companyName: 'Medical Lab Management',
            title: 'Contracted Software Developer',
            period: 'Sept 2019 - Nov 2019',
            responsibilities: [
                'Contracted Full Stack Developer working in JavaScript/Vue.js, PHP, and SQL',
                'Worked on an enterprise software to be used by Hospitals and Pharmacies',
                'Helped the company to reach their deadline for releasing a minimal viable project',
            ],
        },
        {
            companyName: 'Case Medical',
            title: 'Full Stack Software Developer',
            period: 'Sept 2017 - Sept 2019',
            responsibilities: [
                'Full Stack Software Developer working in ReactJS, PHP/Laravel, MySQL, TypeScript.',
                'Worked on an enterprise software to be used by hospitals',
                'Led a group of 3 developers, performing code reviews as well as assisting with any guidance that may be needed',
                'Was in charge of making many of the design choices such as the tech stack, deployment cycle, etc..',
                "Worked on migrating/updating older applications, so I'm very comfortable with reading other people's code",
            ],
        },
    ],
    techStack: [
        {
            name: 'Javascript',
            proficiency: 100,
            icon: SiJavascript,
            iconFill: '#fcdc00',
        },
        {
            name: 'TypeScript',
            proficiency: 90,
            icon: SiTypescript,
            iconFill: '#3178c6',
        },
        {
            name: 'React',
            proficiency: 100,
            icon: SiReact,
            iconFill: '#61dafb',
        },
        {
            name: 'Node',
            proficiency: 100,
            icon: SiNodedotjs,
            iconFill: '#689f63',
        },
        {
            name: 'Chakra UI',
            proficiency: 90,
            icon: AiFillThunderbolt,
            iconFill: 'gold',
        },
        {
            name: 'PHP',
            proficiency: 100,
            icon: SiPhp,
            iconFill: '#8892bf',
        },
        {
            name: 'Laravel',
            proficiency: 80,
            icon: SiLaravel,
            iconFill: '#ff2d20',
        },
        {
            name: 'Python',
            proficiency: 50,
            icon: SiPython,
            iconFill: '#254f73',
        },
        {
            name: 'Java',
            proficiency: 60,
            icon: SiJava,
            iconFill: '#ec2025',
        },
    ],
    projects: [
        {
            name: 'MBBlocker',
            screenshots: [{ image: mbblocker1 }],
            description:
                'An easy to use and beautiful Chrome Extension for blocking websites. Created to boost my productivity and learn chrome extension development.',
            github: 'https://github.com/ffTsuzuku/MBBlocker',
        },
        {
            name: 'MBPomodoro',
            screenshots: [
                { image: pomodoroScreenshot1 },
                { image: pomodoroScreenshot2 },
                { image: pomodoroScreenshot3 },
            ],
            description:
                'As a software developer, I created a Pomodoro app that provides a more calming and peaceful experience than traditional Pomodoro apps. To achieve this, I incorporated soothing meditation gong sounds as an alternative to the typical disruptive alarm noises. In addition to the calming sounds, the app allows users to customize time presets and easily switch between them. Users can also control the volume of the different sound effects in the app and save their settings locally, eliminating the need for creating an account. To enhance usability, I added gesture controls through Bluetooth headphone integration. This allows users to start and pause the timer with simple gestures, eliminating the need to touch the phone or computer. Through the creation of this app, I have honed my skills in user interface design, audio integration, and mobile application development.',
            github: 'https://github.com/ffTsuzuku/MBPomodoro',
        },
    ],
    education: [
        {
            institution: 'NJIT',
            major: 'Computer Science',
            level: 'Masters',
            period: '2020 - On Hold',
        },
        {
            institution: 'NJIT',
            major: 'Information Technology',
            level: 'Bachlors',
            period: '2012 - 2017',
        },
    ],
}

export default data
