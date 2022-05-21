import {
    Box,
    Button,
    Flex,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'

import darkWallpaper from '../imgs/s1.jpg'
import lightWallpaper from '../imgs/peotry.jpg'

function Cover() {
    const { colorMode } = useColorMode()

    // const darkWallpaper =
    //     'https://media.idownloadblog.com/wp-content/uploads/2020/10/iOS-14.2-wallpaper-Desert-Peak-Dark-Mode.jpg'
    // const lightWallpaper =
    //     'https://media.idownloadblog.com/wp-content/uploads/2020/10/iOS-14.2-wallpaper-Desert-Peak-Light-Mode.jpg'
    const src = colorMode === 'dark' ? darkWallpaper : lightWallpaper
    const blurbBgColor = useColorModeValue(
        'blackAlpha.700',
        'rgba(85, 60, 154, 0.80)'
    )

    return (
        <Box backgroundImage={src} backgroundPosition='left' h='100vh' w='100%'>
            <VStack
                alignItems={{ base: 'center', lg: 'start' }}
                h='100%'
                justifyContent={'center'}
                paddingX={10}
                spacing={5}
                w={{ base: '100%', md: '100%', lg: '50%' }}
            >
                <Text fontSize={{ base: '35px', md: '60px', lg: '76px' }}>
                    FullStack Developer
                </Text>
                <Text fontSize={{ base: '30px', md: '50px', lg: '60px' }}>
                    5+ Years Experience
                </Text>
                <Text
                    color={'white'}
                    width={{ lg: '60%' }}
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
                <Button colorScheme={'twitter'} size={'lg'}>
                    Download CV
                </Button>
            </VStack>
        </Box>
    )
}

export default Cover
