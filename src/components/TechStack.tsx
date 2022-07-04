import {
    Link,
    Box,
    CircularProgress,
    CircularProgressLabel,
    HStack,
    VStack,
    Flex,
    Text,
    Icon,
    Progress,
    useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import useIntersection from '../hooks/useIntersection'

import { VscCode } from 'react-icons/vsc'

import { CircleIconWrapper } from './CircleIconWrapper'
import ProgressBar from './ProgressBar'

import data from '../data'

function TechStack({ onVisible }: SectionProps) {
    const ref = useRef<HTMLDivElement>()
    const isShowing = useIntersection(ref, '-200px')

    const bgColor = useColorModeValue('#DEE4E7', '#282834')

    useEffect(() => {
        if (isShowing) {
            onVisible()
        }
    }, [isShowing])

    const SkillsJSX = data.techStack.map((skill) => {
        return (
            <CircularProgress
                key={skill.name}
                value={skill.proficiency}
                color='purple.300'
                size={'200px'}
            >
                <CircularProgressLabel fontSize={{ base: '20px' }}>
                    <Icon
                        as={skill.icon}
                        fill={skill.iconFill}
                        boxSize={'2em'}
                    />
                    <Text>{skill.name}</Text>
                    <Text>{`${skill.proficiency}%`}</Text>
                </CircularProgressLabel>
            </CircularProgress>
        )
    })
    return (
        <VStack backgroundColor={bgColor} paddingY={'50px'} ref={ref}>
            <Link id='TechStack' />
            <Flex maxWidth={'100vw'} justifyContent={'center'}>
                <HStack justifyContent={'center'}>
                    <CircleIconWrapper icon={VscCode} />
                    <Text fontSize={{ base: '20px', md: '30px', lg: '40px' }}>
                        Tech Stack
                    </Text>
                    <Progress value={80} />
                </HStack>
            </Flex>
            <HStack justifyContent={'center'} wrap={'wrap'} width={'80%'}>
                {SkillsJSX}
            </HStack>
        </VStack>
    )
}

export default TechStack
