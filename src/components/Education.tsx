import {
    VStack,
    Link,
    Flex,
    HStack,
    Text,
} from '@chakra-ui/react'
import { CircleIconWrapper } from './CircleIconWrapper'
import Book from '../imgs/icons/Book'

import Card from './Card'
import data from '../data'
function Education({ element }: SectionProps) {
    const EducationCards = data.education.map((school, index) => {
        return (
            <Card
                key={index}
                image='https://news.njit.edu/sites/news/files/styles/16by9-banner/public/eberhardt_HDR.jpg?itok=1OTeWInX'
                title={school.institution}
                subTitle={`${school.level} ${school.major}`}
                badge={school.period}
            />
        )
    })

    return (
        <VStack paddingY={'50px'} spacing={50} ref={element}>
            <Link id='Education' />
            <Flex maxWidth={'100vw'} justifyContent={'center'}>
                <HStack justifyContent={'center'}>
                    <CircleIconWrapper icon={Book} />
                    <Text
                        fontSize={{
                            base: '20px',
                            md: '30px',
                            lg: '40px',
                        }}
                    >
                        Education
                    </Text>
                </HStack>
            </Flex>
            <HStack w='80%' justifyContent={'space-evenly'}>
                {EducationCards}
            </HStack>
        </VStack>
    )
}

export default Education
