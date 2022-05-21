import { useState } from 'react'
import { Divider, Image, Switch, useColorMode } from '@chakra-ui/react'

import logo from './logo.svg'
import './App.css'
import Cover from './components/Cover'
import Header from './components/Header'
import WorkExperience from './components/WorkExperience'
import TechStack from './components/TechStack'
import Education from './components/Education'

function App() {
    return (
        <div className='App'>
            <Header />
            <Cover />
            <WorkExperience />
            <Divider />
            <TechStack />
            <Education />
        </div>
    )
}

export default App
