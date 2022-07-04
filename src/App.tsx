import { Divider, Show } from '@chakra-ui/react'

import logo from './logo.svg'
import './App.css'
import Cover from './components/Cover'
import Header from './components/Header'
import NavigationOverlay from './components/NavigationOverlay'
import WorkExperience from './components/WorkExperience'
import TechStack from './components/TechStack'
import Education from './components/Education'
import { useInsertionEffect, useRef, useState } from 'react'

function App() {
    const [currentlyViewing, setCurrentlyViewing] =
        useState<AvailableSections>()
    const coverRef = useRef<typeof Cover>()
    return (
        <div className='App'>
            <Show breakpoint='(min-width: 930px)'>
                <NavigationOverlay currentlyViewing={currentlyViewing} />
            </Show>
            <Cover onVisible={() => setCurrentlyViewing('Home')} />
            <WorkExperience
                onVisible={() => setCurrentlyViewing('Work Experience')}
            />
            <TechStack onVisible={() => setCurrentlyViewing('Tech Stack')} />
            <Education onVisible={() => setCurrentlyViewing('Education')} />
        </div>
    )
}

export default App
