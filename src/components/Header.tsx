import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Switch,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import {
  ChevronDownIcon,
  MoonIcon,
} from "@chakra-ui/icons";

import Sun from '../imgs/icons/Sun.tsx'
import data from "../data";
import { CSSObject } from "@emotion/react";

import { sections as menuItems } from "../types/global";

interface HeaderProps {
  sectionTextColor?: string;
  menuItemBgColorTheme?: [string, string];
}
function Header(
  {
    sectionTextColor,
    menuItemBgColorTheme = [],
  }: HeaderProps,
) {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuItemUnderLineColor = useColorModeValue("yellow.400", "yellow.500");
  const menuItemBgColor = useColorModeValue(
    menuItemBgColorTheme[0] || "purple.600",
    menuItemBgColorTheme[1] || "purple.800",
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const switchToggled = useColorModeValue(true, false);

  const ThemeIcon = colorMode === "dark"
    ? <MoonIcon boxSize={"25px"} />
    : <Sun size={25} />;

  const MenuItemTextHoverStlyes: CSSObject = {
    backgroundColor: menuItemBgColor,
    borderRadius: "3px",
  };
  const scrollToElement = (elementId) => {
    if (window.location.hash !== "#/") {
      window.location.hash = "#/";

      // Wait for the hash change to take effect before scrolling
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const HeaderItemsJSX = menuItems.map((item) => {
    if (!item.isFragment) {
      return (
        <Link key={item.label} role="group" href={item.link} _hover={{}}>
          <Flex
            padding={"8px 5px 3px 5px"}
            justifyContent={"center"}
            alignItems="center"
            cursor="pointer"
            _groupHover={MenuItemTextHoverStlyes}
          >
            {item.label}
          </Flex>
          <Box
            marginTop={"5px"}
            border={"2px solid transparent"}
            borderRadius="3px"
            _groupHover={{ borderColor: menuItemUnderLineColor }}
          />
        </Link>
      );
    }
    return (
      <Box
        key={item.label}
        role="group"
        _hover={{}}
        onClick={() => scrollToElement(item.link)}
      >
        <Flex
          padding={"8px 5px 3px 5px"}
          justifyContent={"center"}
          alignItems="center"
          cursor="pointer"
          _groupHover={MenuItemTextHoverStlyes}
        >
          {item.link}
        </Flex>
        <Box
          marginTop={"5px"}
          border={"2px solid transparent"}
          borderRadius="3px"
          _groupHover={{ borderColor: menuItemUnderLineColor }}
        />
      </Box>
    );
  });

  const MenuOptionsJSX = menuItems.map((item) => {
    if (!item.isFragment) {
      return (
        <Link key={item.label} role="group" href={item.link} _hover={{}}>
          <Flex
            padding={"8px 5px 3px 15px"}
            alignItems="center"
            cursor="pointer"
            _groupHover={MenuItemTextHoverStlyes}
          >
            {item.label}
          </Flex>
          <Box
            marginTop={"5px"}
            border={"2px solid transparent"}
            borderRadius="3px"
            _groupHover={{ borderColor: menuItemUnderLineColor }}
          />
        </Link>
      );
    }
    return (
      <MenuItem
        cursor="pointer"
        key={item.label}
        onClick={() => scrollToElement(item.label)}
      >
        {item.label}
      </MenuItem>
    );
  });

  return (
    <>
      <Flex
        zIndex={1}
        justifyContent={"space-between"}
        width="100%"
        height={20}
        alignItems={"center"}
        padding={8}
      >
        <HStack color={sectionTextColor}>
          <Menu>
            <MenuButton
              color={sectionTextColor ?? "white"}
              as={Button}
              rightIcon={
                <Show breakpoint="(max-width: 768px)">
                  <ChevronDownIcon />
                </Show>
              }
              backgroundColor="transparent"
              border="1px"
            >
              {data.name}
            </MenuButton>
            <Show breakpoint="(max-width: 768px)">
              <MenuList>{MenuOptionsJSX}</MenuList>
            </Show>
          </Menu>
        </HStack>

        <HStack
          spacing={5}
          alignContent="center"
          color={sectionTextColor ?? "white"}
        >
          <Show breakpoint="(min-width: 800px)">
            {HeaderItemsJSX}
          </Show>
          <Switch
            colorScheme="yellow"
            size="lg"
            onChange={toggleColorMode}
            onClick={onOpen}
            isChecked={switchToggled}
          />

          {ThemeIcon}
        </HStack>
      </Flex>
    </>
  );
}

export default Header;
