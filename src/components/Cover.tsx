import {
    Box,
    Button,
    Flex,
    Image,
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

    const src = colorMode === 'dark' ? darkWallpaper : lightWallpaper
    const blurbBgColor = useColorModeValue(
        'blackAlpha.700',
        'rgba(85, 60, 154, 0.80)'
    )

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
                <Text fontSize={{ base: '35px', md: '60px', lg: '76px' }}>
                    FullStack Developer
                </Text>
                <Text fontSize={{ base: '30px', md: '50px', lg: '60px' }}>
                    5+ Years Experience
                </Text>
                <Text
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
                    <Button colorScheme={'twitter'} size={'lg'}>
                        Download CV
                    </Button>
                </Link>
            </VStack>
        </Box>
    )
}

export default Cover
