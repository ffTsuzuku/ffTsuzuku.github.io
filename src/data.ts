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

interface User {
    name: string
    workExperience: Work[]
    techStack: Skill[]
    education: School[]
}

const data: User = {
    name: 'Deep Sandhu',
    workExperience: [
        {
            companyName: 'EarthCam',
            title: 'Full Stack Web Developer',
            period: 'Present - 2020',
            responsibilities: [
                'Working in ReactJS, PHP/Laravel, MySQL, Node, TypeScript and Python',
                'Lead Front-end developer',
                'Wrote a dropbox clone that allowed importing from third party apps such as Procore, Plangrid, etc..',
                'Wrote a gallery client that allows for advanced AI-Based Filtering, Weather Tracking, which is being used by Amazon',
                'Migrated Code Bases from Angular 1 to React, which greatly reduced the number of bugs, and improved application responsiveness',
                'Wrote build and automation tools',
                'Mentoring Junior Developers, helping them with tickets and reviewing their code',
            ],
        },
        {
            companyName: 'Medical Lab Management',
            title: 'Contracted Software Developer',
            period: 'Nov 2019 - Sept 2019',
            responsibilities: [
                'Contracted Full Stack Developer working in JavaScript/Vue.js, PHP, and SQL',
                'Worked on an enterprise software to be used by Hospitals and Pharmacies',
                'Helped the company to reach their deadline for releasing a minimal viable project',
            ],
        },
        {
            companyName: 'Case Medical',
            title: 'Full Stack Software Developer',
            period: 'Sept 2019 - Sept 2017',
            responsibilities: [
                'Full Stack Developer. Working in Javascript, PHP/Laravel, SQL and Python',
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
    education: [
        {
            institution: 'NJIT',
            major: 'Computer Science',
            level: 'Masters',
            period: '2019 - On Hold',
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
