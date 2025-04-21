import {
    VStack,
    Link,
    Flex,
    HStack,
    Text,
		useColorModeValue,
} from '@chakra-ui/react'
import { CircleIconWrapper } from './CircleIconWrapper'
import Book from '../imgs/icons/Book'
import njit from "../imgs/njit.webp"

import Card from './Card'
import data from '../data'
function Education({ element }: SectionProps) {
  const bgColor = useColorModeValue("#DEE4E7", "#282834");
    const EducationCards = data.education.map((school, index) => {
        return (
            <Card
                key={index}
                image={njit}
                title={school.institution}
                subTitle={`${school.level} ${school.major}`}
                badge={school.period}
            />
        )
    })

    return (
        <VStack paddingY={'50px'} spacing={50} ref={element} bgColor={bgColor}>
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
