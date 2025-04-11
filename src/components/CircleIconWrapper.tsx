import { Flex, Icon, BorderProps, useColorModeValue } from '@chakra-ui/react'

interface CircleIconWrapperProps {
		icon: () => JSX.Element 
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
