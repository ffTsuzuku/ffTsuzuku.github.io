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
} from '@chakra-ui/react'
import BriefCase from '../imgs/icons/Briefcase'
import Code from '../imgs/icons/Code'

import Data from '../data'
import { CircleIconWrapper } from './CircleIconWrapper'

function WorkExperience({ element }: SectionProps) {
    const { workExperience } = Data

    const CompanyListJSX: JSX.Element[] = []
    const CompanyDetailJSX: JSX.Element[] = []
		const CodeIcon = <Code  size={'30px'} fill={'green'}/>

    workExperience.forEach((company, index) => {
        const { title, period, responsibilities, companyName } =
            company
        CompanyListJSX.push(
            <Tab
                key={index}
                _selected={{
                    boxShadow: 'none',
                    borderBottom: '5px solid red',
                }}
            >
                {companyName}
            </Tab>
        )
        const TitleJSX = (
            <Text fontWeight={'bold'} fontSize={{ base: '25px' }}>
                {title}
            </Text>
        )
        const PeriodJSX = (
            <Text fontSize={{ base: '25px' }}>{period}</Text>
        )

        const ResponsibilitiesJSX = responsibilities.map(
            (responsibility, index) => {
                return (
                    <ListItem key={index} >
                        <ListIcon
                            as={Code}
                            color='green.500'
                        />
                        {responsibility}
                    </ListItem>
                )
            }
        )

        CompanyDetailJSX.push(
            <TabPanel marginLeft={'auto'} key={index}>
                <VStack>
                    <List spacing={4} marginTop={4}>
                        {TitleJSX}
                        {PeriodJSX}
                        {ResponsibilitiesJSX}
                    </List>
                </VStack>
            </TabPanel>
        )
    })

    return (
        <>
            <Box id='WorkExperience'></Box>
            <Box maxWidth={'100vw'} ref={element}>
                <HStack justifyContent={'center'} marginY={10}>
                    <CircleIconWrapper icon={BriefCase} />
                    <Text
                        fontSize={{
                            base: '20px',
                            md: '30px',
                            lg: '40px',
                        }}
                    >
                        Work Experience
                    </Text>
                </HStack>
                <Tabs>
                    <TabList
                        overflowX={'auto'}
                        overflowY='hidden'
                        justifyContent={'center'}
                    >
                        {CompanyListJSX}
                    </TabList>

                    <TabPanels textAlign={'start'}>
                        {CompanyDetailJSX}
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}

export default WorkExperience
