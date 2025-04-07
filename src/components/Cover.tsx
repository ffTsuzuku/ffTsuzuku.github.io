import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useBreakpointValue,
	useBreakpoint,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import darkWallpaper from "../imgs/s1.jpg";
import lightWallpaper from "../imgs/peotry.jpg";
import Header from "./Header";
import React, { LegacyRef, useEffect, useRef} from "react";
import useIntersection from "../hooks/useIntersection";
import { social_media } from "../data";
import { useContext } from "react";
import DebugContext from "../context/DebugContext";

const open_social_link = (link) => {
  window.open(link, "_blank");
};
const Socials = () => {
	const breakpoint = useBreakpoint()
	const {enable, add_info, show_debug} = useContext(DebugContext)

	const line_color = useColorModeValue('white', 'white')
	const line_width = useBreakpointValue({base: '40%', md: '40%' })
	const icon_width = useBreakpointValue({base: '30px', sm: '40px', md: '60px'})
	const icon_area_width = useBreakpointValue({base: '30%', small: '5%', lg: '20%'})

	useEffect(() => {
		//enable()
	}, [])

	useEffect(() => {
		add_info('line_width', line_width)
	}, [line_width])

	useEffect(() => {
		add_info('breakpoint', breakpoint)
	}, [breakpoint])

	const Line = <Box
		as={"span"}
		borderWidth={'1px'}
		borderColor={line_color}
		width={line_width}
		height={"0px"}
	/>
  const links = social_media.map((social) => {
    return (
      <Flex
        alignItems={"center"}
        cursor={"pointer"}
        onClick={() => open_social_link(social.link)}
        key={social.name}
      >
        <social.icon width={icon_width} />
      </Flex>
    );
  });
  return (
    <Flex alignItems={"center"} justifyContent={"flex-start"} w={"100%"}>
			{Line}
      <Flex w={icon_area_width} gap={5} px={"10px"} justifyContent={"center"}>
        {links}
      </Flex>
			{Line}
    </Flex>
  );
};

function Cover({ element }: SectionProps) {
  const { colorMode } = useColorMode();

  const jobTitleRef = useRef<HTMLParagraphElement>(null);
  const experienceRef = useRef<HTMLParagraphElement>(null);
  const blurbRef = useRef<HTMLParagraphElement>(null);
  const downloadCVRef = useRef<HTMLButtonElement>(null);
  useIntersection({
    element: jobTitleRef,
    rootMargin: "0px",
    onIntersect: toggleVisibility,
  });
  useIntersection({
    element: experienceRef,
    rootMargin: "0px",
    onIntersect: toggleVisibility,
  });
  useIntersection({
    element: blurbRef,
    rootMargin: "0px",
    onIntersect: toggleVisibility,
  });
  useIntersection({
    element: downloadCVRef,
    rootMargin: "0px",
    onIntersect: toggleVisibility,
  });

  const src = colorMode === "dark" ? darkWallpaper : lightWallpaper;
  const blurbBgColor = useColorModeValue(
    "blackAlpha.700",
    "rgba(85, 60, 154, 0.80)",
  );

  function toggleVisibility(el: IntersectionObserverEntry) {
    if (el.isIntersecting) {
      (el.target as HTMLParagraphElement).style.opacity = "1";
    }
    // else {
    //     ;(el.target as HTMLParagraphElement).style.opacity = '0'
    // }
  }

  return (
    <Box
      ref={element}
      backgroundImage={src}
      backgroundPosition="left"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      w="100%"
    >
      <Link id="Home" />
      <Header />
      <VStack
        minHeight="100vh"
        w={"100%"}
        justifyContent={"center"}
        spacing={5}
      >
        <Text
          fontSize={{
            base: "35px",
            md: "60px",
            lg: "76px",
          }}
          ref={jobTitleRef}
          opacity={0}
          transition={"opacity 2s"}
        >
          Gagandeep Sandhu
        </Text>
        <Socials />
        <Text
          ref={blurbRef}
          color={"white"}
          width={"80%"}
          p={3}
          textAlign={{
            sm: "center",
            md: "center",
            lg: "left",
          }}
          fontSize={{ base: "20px", md: "25px" }}
        >
          Highly driven and experienced software developer who has a passion for
          learning and sharing knowledge with others.
        </Text>
        <Link
          href="https://drive.google.com/open?id=10iI2tDjdhJ4Qi710ji7cces2ZTYuLh-U&authuser=0&export=download"
          target={"_blank"}
        >
          <Button
            opacity={0}
            transition={"opacity 7s"}
            colorScheme={"twitter"}
            size={"lg"}
            ref={downloadCVRef}
          >
            Download CV
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default Cover;
