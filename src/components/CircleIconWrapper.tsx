import { Flex, Icon, BorderProps, useColorModeValue } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface CircleIconWrapperProps {
    icon: IconType
    darkBorder?: BorderProps['borderColor']
    lightBorder?: BorderProps['borderColor']
}

export function CircleIconWrapper({
    icon,
    darkBorder,
    lightBorder,
}: CircleIconWrapperProps) {
    const borderColor = useColorModeValue(
        darkBorder ?? 'black',
        lightBorder ?? 'white'
    )
    return (
        <Flex
            h={'50px'}
            w={'50px'}
            justifyContent='center'
            alignItems={'center'}
            border='1px solid'
            borderColor={borderColor}
            borderRadius={'40px'}
        >
            <Icon w={30} h={30} as={icon} />
        </Flex>
    )
}
