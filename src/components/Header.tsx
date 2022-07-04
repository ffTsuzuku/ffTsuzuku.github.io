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
    Box,
} from '@chakra-ui/react'

import {
    ChevronDownIcon,
    HamburgerIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons'

import { BsFillSunFill } from 'react-icons/bs'

import data from '../data'
import { CSSObject } from '@emotion/react'

import { sections as menuItems } from '../types/global'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const menuItemUnderLineColor = useColorModeValue('yellow.400', 'yellow.500')
    const menuItemBgColor = useColorModeValue('purple.600', 'purple.800')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const switchToggled = useColorModeValue(true, false)

    const ThemeIcon =
        colorMode === 'dark' ? (
            <MoonIcon boxSize={'25px'} />
        ) : (
            <BsFillSunFill size={25} />
        )

    const MenuItemTextHoverStlyes: CSSObject = {
        backgroundColor: menuItemBgColor,
        borderRadius: '3px',
    }

    const HeaderItemsJSX = menuItems.map((item) => {
        return (
            <Link key={item.label} role='group' href={item.link} _hover={{}}>
                <Flex
                    padding={'8px 5px 3px 5px'}
                    justifyContent={'center'}
                    alignItems='center'
                    cursor='pointer'
                    _groupHover={MenuItemTextHoverStlyes}
                >
                    {item.label}
                </Flex>
                <Box
                    marginTop={'5px'}
                    border={'2px solid transparent'}
                    borderRadius='3px'
                    _groupHover={{ borderColor: menuItemUnderLineColor }}
                />
            </Link>
        )
    })

    const MenuOptionsJSX = menuItems.map((item) => {
        return (
            <Link key={item.label} href={item.link}>
                <MenuItem cursor='pointer'>{item.label}</MenuItem>
            </Link>
        )
    })

    return (
        <>
            <Flex
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
                            color={'white'}
                            as={Button}
                            rightIcon={
                                <Show breakpoint='(max-width: 719px)'>
                                    <ChevronDownIcon />
                                </Show>
                            }
                            backgroundColor='transparent'
                            border='1px'
                        >
                            {data.name}
                        </MenuButton>
                        <Show breakpoint='(max-width: 720px)'>
                            <MenuList>{MenuOptionsJSX}</MenuList>
                        </Show>
                    </Menu>
                </HStack>

                <HStack spacing={5} alignContent='center' color={'white'}>
                    <Show breakpoint='(min-width: 720px)'>
                        {HeaderItemsJSX}
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
