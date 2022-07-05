import { Divider, Show } from '@chakra-ui/react'

import logo from './logo.svg'
import './App.css'
import Cover from './components/Cover'
import Header from './components/Header'
import NavigationOverlay from './components/NavigationOverlay'
import WorkExperience from './components/WorkExperience'
import TechStack from './components/TechStack'
import Education from './components/Education'
import { useEffect, useRef, useState } from 'react'

import { useBreakpointValue } from '@chakra-ui/react'

import useIntersection from './hooks/useIntersection'

function App() {
    const interSectionThreshold = useBreakpointValue({
        base: 0.3,
        md: 0.5,
        lg: 0.8,
    })

    const [currentlyViewing, setCurrentlyViewing] =
        useState<AvailableSections>()

    const coverRef = useRef<HTMLDivElement>(null)
    const workExperienceRef = useRef<HTMLDivElement>(null)
    const techStackRef = useRef<HTMLDivElement>(null)
    const educationRef = useRef<HTMLDivElement>(null)

    const showingCover = useIntersection(coverRef, '0px', interSectionThreshold)
    const showingWorkExperience = useIntersection(
        workExperienceRef,
        '0px',
        interSectionThreshold
    )
    const showingTechStack = useIntersection(
        techStackRef,
        '0px',
        interSectionThreshold
    )
    const showingEducation = useIntersection(
        educationRef,
        '0px',
        interSectionThreshold
    )

    useEffect(() => {
        if (showingCover) {
            setCurrentlyViewing('Home')
        } else if (showingWorkExperience) {
            setCurrentlyViewing('Work Experience')
        } else if (showingTechStack) {
            setCurrentlyViewing('Tech Stack')
        } else if (showingEducation) {
            setCurrentlyViewing('Education')
        }
    }, [
        showingCover,
        showingEducation,
        showingWorkExperience,
        showingTechStack,
    ])

    return (
        <div className='App'>
            <NavigationOverlay currentlyViewing={currentlyViewing} />
            <Cover element={coverRef} />
            <WorkExperience element={workExperienceRef} />
            <TechStack element={techStackRef} />
            <Education element={educationRef} />
        </div>
    )
}

export default App
