import {
    Button,
    Flex,
    Switch,
    Hide,
    HStack,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Show,
    Icon,
} from '@chakra-ui/react'

import {
    ChevronDownIcon,
    HamburgerIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons'

import { BsFillSunFill } from 'react-icons/bs'

import data from '../data'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const nameBadgeColor = useColorModeValue('orange.700', 'gray.800')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const switchToggled = useColorModeValue(true, false)

    const ThemeIcon =
        colorMode === 'dark' ? <MoonIcon /> : <BsFillSunFill size={25} />
    return (
        <>
            <Flex
                position={'absolute'}
                zIndex={1}
                justifyContent={'space-between'}
                width='100%'
                height={20}
                alignItems={'center'}
                padding={8}
            >
                <HStack>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={
                                <Show breakpoint='(max-width: 650px)'>
                                    <ChevronDownIcon />
                                </Show>
                            }
                            backgroundColor='transparent'
                            border='1px'
                        >
                            {data.name}
                        </MenuButton>
                        <Show breakpoint='(max-width: 650px)'>
                            <MenuList>
                                <Link href='#WorkExperience'>
                                    <MenuItem cursor='pointer'>
                                        Work Experence
                                    </MenuItem>
                                </Link>
                                <Link href='#TechStack'>
                                    <MenuItem cursor='pointer'>
                                        Tech Stack
                                    </MenuItem>
                                </Link>
                                <Link href='#Education'>
                                    <MenuItem cursor='pointer'>
                                        Education
                                    </MenuItem>
                                </Link>
                                <MenuItem cursor='pointer'>GitHub</MenuItem>
                            </MenuList>
                        </Show>
                    </Menu>
                </HStack>

                <HStack spacing={5} alignContent='center' color={'white'}>
                    <Show breakpoint='(min-width: 650px)'>
                        <Link href='#WorkExperience'>
                            <Text cursor='pointer'>Work Experience</Text>
                        </Link>
                        <Link href='#TechStack'>
                            <Text cursor='pointer'>Tech Stack</Text>
                        </Link>
                        <Link href='#Education'>
                            <Text cursor='pointer'>Education</Text>
                        </Link>
                        <Text cursor='pointer'>GitHub</Text>
                    </Show>
                    <Switch
                        colorScheme='yellow'
                        size='lg'
                        onChange={toggleColorMode}
                        onClick={onOpen}
                        isChecked={switchToggled}
                    />

                    {ThemeIcon}
                </HStack>
            </Flex>
        </>
    )
}

export default Header
