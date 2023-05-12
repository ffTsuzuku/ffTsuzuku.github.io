import {
    Box,
    HStack,
    Link,
    List,
    ListIcon,
    ListItem,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    Text,
    VStack,
    Flex,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'
import { CircleIconWrapper } from './CircleIconWrapper'
import { ImBriefcase } from 'react-icons/im'
import CaptionCarousel, { CarouselImage } from './ImageCarousel'
import Data from '../data'

const Projects = ({ element }: SectionProps) => {
    const bgColor = useColorModeValue('#DEE4E7', '#282834')
    const { projects } = Data

    const ProjectListJSX: JSX.Element[] = []
    const ProjectDetailsJSX: JSX.Element[] = []

    for (const project of projects) {
        const { name, github, description, screenshots } = project
        ProjectListJSX.push(
            <Tab
                key={github}
                _selected={{
                    boxShadow: 'none',
                    borderBottom: '5px solid red',
                }}
            >
                {name}
            </Tab>
        )
        ProjectDetailsJSX.push(
            <Flex p={10} justifyContent={'center'}>
                <CaptionCarousel
                    width={500}
                    height={250}
                    images={screenshots}
                />
                <VStack
                    justifyContent={'flex-start'}
                    w={'40%'}
                    alignItems={'flex-start'}
                    ml={10}
                >
                    <Text noOfLines={[8, 20]}>{description}</Text>
                    <Button>Github</Button>
                </VStack>
            </Flex>
        )
    }

    return (
        <>
            <Link id='Projects'></Link>
            <Box
                maxWidth={'100vw'}
                ref={element}
                backgroundColor={bgColor}
            >
                <HStack
                    justifyContent={'center'}
                    marginY={10}
                    paddingTop={10}
                >
                    <CircleIconWrapper icon={ImBriefcase} />
                    <Text
                        fontSize={{
                            base: '20px',
                            md: '30px',
                            lg: '40px',
                        }}
                    >
                        Projects
                    </Text>
                </HStack>
                <Tabs>
                    <TabList
                        overflowX={'auto'}
                        overflowY='hidden'
                        justifyContent={'center'}
                    >
                        {ProjectListJSX}
                    </TabList>

                    <TabPanels textAlign={'start'}>
                        {ProjectDetailsJSX}
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}

export default Projects
