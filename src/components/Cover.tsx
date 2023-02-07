import {
    Box,
    Button,
    Text,
    useColorMode,
    useColorModeValue,
    Link,
    VStack,
} from '@chakra-ui/react'

import darkWallpaper from '../imgs/s1.jpg'
import lightWallpaper from '../imgs/peotry.jpg'
import Header from './Header'
import React, { useEffect, useRef, LegacyRef } from 'react'
import useIntersection from '../hooks/useIntersection'

function Cover({ element }: SectionProps) {
    const { colorMode } = useColorMode()

    const jobTitleRef = useRef<HTMLParagraphElement>(null)
    const experienceRef = useRef<HTMLParagraphElement>(null)
    const blurbRef = useRef<HTMLParagraphElement>(null)
    const downloadCVRef = useRef<HTMLButtonElement>(null)
    useIntersection({
        element: jobTitleRef,
        rootMargin: '0px',
        onIntersect: toggleVisibility,
    })
    useIntersection({
        element: experienceRef,
        rootMargin: '0px',
        onIntersect: toggleVisibility,
    })
    useIntersection({
        element: blurbRef,
        rootMargin: '0px',
        onIntersect: toggleVisibility,
    })
    useIntersection({
        element: downloadCVRef,
        rootMargin: '0px',
        onIntersect: toggleVisibility,
    })

    const src = colorMode === 'dark' ? darkWallpaper : lightWallpaper
    const blurbBgColor = useColorModeValue(
        'blackAlpha.700',
        'rgba(85, 60, 154, 0.80)'
    )

    function toggleVisibility(el: IntersectionObserverEntry) {
        if (el.isIntersecting) {
            ;(el.target as HTMLParagraphElement).style.opacity = '1'
        }
        // else {
        //     ;(el.target as HTMLParagraphElement).style.opacity = '0'
        // }
    }

    return (
        <Box
            ref={element}
            backgroundImage={src}
            backgroundPosition='left'
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            w='100%'
        >
            <Link id='Home' />
            <Header />
            <VStack
                minHeight='100vh'
                w={'100%'}
                justifyContent={'center'}
                spacing={5}
            >
                <Text
                    fontSize={{ base: '35px', md: '60px', lg: '76px' }}
                    ref={jobTitleRef}
                    opacity={0}
                    transition={'opacity 2s'}
                >
                    FullStack Developer
                </Text>
                <Text
                    fontSize={{ base: '30px', md: '50px', lg: '60px' }}
                    opacity={0}
                    transition={'opacity 5s'}
                    ref={experienceRef}
                >
                    5+ Years Experience
                </Text>
                <Text
                    ref={blurbRef}
                    opacity={0}
                    transition={'opacity 5s'}
                    color={'white'}
                    width={'80%'}
                    p={3}
                    backgroundColor={blurbBgColor}
                    borderRadius={'10px'}
                    shadow={'dark-lg'}
                    textAlign={{ sm: 'center', md: 'center', lg: 'left' }}
                    fontSize={{ base: '20px', md: '25px' }}
                >
                    Highly driven and experienced software developer who has a
                    passion for learning and sharing knowledge with others.
                </Text>
                <Link
                    href='https://drive.google.com/uc?id=190hE2RrXQBZC5qqkx-IOrQ0WHcAn310R&authuser=0&export=download'
                    target={'_blank'}
                >
                    <Button
                        opacity={0}
                        transition={'opacity 7s'}
                        colorScheme={'twitter'}
                        size={'lg'}
                        ref={downloadCVRef}
                    >
                        Download CV
                    </Button>
                </Link>
            </VStack>
        </Box>
    )
}

export default Cover
