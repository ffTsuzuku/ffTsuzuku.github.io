// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  Switch,
  useColorModeValue,
  useColorMode,
  Divider,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { social_media } from "../data";
import data from "../data";

const MailIcon = (props: any) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="auto" width={props.width ?? "200px"} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" stroke="currentColor" strokeWidth="2" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <path fill="none" stroke="currentColor" strokeWidth="2" d="M22 6l-10 7L2 6"></path>
  </svg>
);

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

function Main() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#ffffff", "#151515");
  const color = useColorModeValue("#151515", "#e5e5e5");
  const mutedColor = useColorModeValue("#555555", "#aaa");
  const borderlineColor = useColorModeValue("#eee", "#333");
  const sidebarWidth = "220px";

  const [activeTab, setActiveTab] = useState("home");

  const [firstName, lastName] = data.name.toUpperCase().split(" ");
  const email = "gagandeepsandhu@protonmail.com"; 
  const iconWidth = "18px";

  const techCategories = ["Frontend", "Backend", "AI", "Tools", "Languages"];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const SectionThemeToggle = () => (
    <Flex display={{ base: "flex", md: "flex" }} justify="flex-end" align="center">
      <Box
        border="1px solid"
        borderColor={mutedColor}
        borderRadius="full"
        px={1}
        py={1}
        display="flex"
        alignItems="center"
      >
        <Switch
          size="md"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="whiteAlpha"
        />
      </Box>
    </Flex>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} mb={16} w="100%">
      <Flex w="100%" justify="space-between" align="center" gap={6} mb={4}>
        <Text fontSize="xl" letterSpacing="widest" fontWeight="400" textTransform="uppercase">
          {title}
        </Text>
        <SectionThemeToggle />
      </Flex>
      <Divider borderColor={mutedColor} />
    </MotionBox>
  );

  const TypewriterHeader = ({ firstName, lastName, color }) => {
    const [displayedFirstName, setDisplayedFirstName] = useState("");
    const [displayedLastName, setDisplayedLastName] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [typingStage, setTypingStage] = useState(0); // 0: typing first, 1: typing last, 2: done

    useEffect(() => {
      let timer;
      if (typingStage === 0) {
        if (displayedFirstName.length < firstName.length) {
          timer = setTimeout(() => {
            setDisplayedFirstName(firstName.slice(0, displayedFirstName.length + 1));
          }, 100);
        } else {
          timer = setTimeout(() => setTypingStage(1), 300);
        }
      } else if (typingStage === 1) {
        if (displayedLastName.length < lastName.length) {
          timer = setTimeout(() => {
            setDisplayedLastName(lastName.slice(0, displayedLastName.length + 1));
          }, 100);
        } else {
          setTypingStage(2);
        }
      }
      return () => clearTimeout(timer);
    }, [displayedFirstName, displayedLastName, typingStage, firstName, lastName]);

    useEffect(() => {
      const blink = setInterval(() => setCursorVisible((v) => !v), 530);
      return () => clearInterval(blink);
    }, []);

    return (
      <VStack align="start" spacing={0} mb={{ base: 16, lg: 0 }}>
        <Text fontSize={{ base: "5xl", sm: "6xl", md: "7xl", xl: "8xl", "2xl": "9xl" }} fontWeight="200" lineHeight="1.05" letterSpacing="-0.02em" minH="1.1em">
          {displayedFirstName}
          {typingStage === 0 && (
            <Box as="span" display="inline-block" w="0.4em" h="0.75em" bg={color} ml={2} opacity={cursorVisible ? 1 : 0} verticalAlign="baseline" />
          )}
        </Text>
        <Text fontSize={{ base: "5xl", sm: "6xl", md: "7xl", xl: "8xl", "2xl": "9xl" }} fontWeight="200" lineHeight="1.05" letterSpacing="-0.02em" minH="1.1em">
          {displayedLastName}
          {typingStage >= 1 && (
            <Box as="span" display="inline-block" w="0.4em" h="0.75em" bg={color} ml={2} opacity={cursorVisible ? 1 : 0} verticalAlign="baseline" />
          )}
        </Text>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: typingStage === 2 ? 1 : 0 }} transition={{ duration: 1.2 }}>
          <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="300" mt={{ base: 4, md: 6 }} color={color} letterSpacing="wide">
            Senior Web Developer / Designer
          </Text>
        </motion.div>
      </VStack>
    );
  };

  const NavItem = ({ id, label, isMobile = false }) => {
    const isActive = activeTab === id;
    return (
      <Box w={isMobile ? "auto" : "100%"} onClick={() => { setActiveTab(id); window.scrollTo(0, 0); }} cursor="pointer">
        <Text fontSize={isMobile ? "10px" : "sm"} letterSpacing="widest" color={isActive ? color : mutedColor} transition="all 0.2s" _hover={{ color }} fontWeight="400">
          {label}
        </Text>
        {isActive && <Box borderBottom="1px solid" borderColor={color} w={isMobile ? "100%" : "50%"} mt={1} />}
      </Box>
    );
  };

  // Section Components
  const HomeSection = () => (
    <Box>
      {/* HERO SECTION */}
      <Flex direction="column" minH={{ base: "auto", md: "100vh" }} pt={{ base: 4, md: 8 }} pb={{ base: 24, md: 8 }} pr={{ base: 4, lg: 10 }}>
        <SectionThemeToggle />

        <Flex flex="1" align={{ base: "flex-start", md: "center" }} justify="space-between" pl={{ base: 8, md: 16 }} pr={{ base: 8, lg: 10 }} mt={{ base: 10, md: 0 }} direction={{ base: "column", lg: "row" }}>
          <TypewriterHeader firstName={firstName} lastName={lastName} color={color} />

          <Box maxW={{ base: "100%", lg: "450px" }} w="100%" mt={{ base: 6, xl: 0 }} alignSelf="center">
            {/* Mobile Email - Positioned exactly above About Me */}
            <Box display={{ base: "block", md: "none" }} mb={16}>
              <Text fontSize="sm" color={mutedColor} fontWeight="300" lineHeight="1.8">
                For business inquiries, email me at<br />
                <Link href={`mailto:${email}`} color={color}>{email}</Link>
              </Text>
            </Box>

            <Text fontSize="xl" letterSpacing="widest" mb={4} fontWeight="400">ABOUT ME</Text>
            <Divider borderColor={mutedColor} mb={6} />
            <Text fontSize={{ base: "xs", sm: "sm", md: "md" }} color={mutedColor} lineHeight="1.8" fontWeight="300">
              Highly driven and experienced software developer who has a passion for learning and sharing knowledge with others.
              <br /><br />
              With extensive experience spanning front-end and back-end systems, I enjoy writing clean, maintainable code to build robust and scalable enterprise-level applications.
              <br /><br />
              My expertise includes modern web technologies like React, TypeScript, Node.js, and PHP/Laravel.
            </Text>
          </Box>
        </Flex>

        {/* Desktop Footer Email */}
        <Box display={{ base: "none", md: "block" }} pt={{ base: 16, md: 8 }} pl={{ base: 4, md: 16 }}>
          <Text fontSize="sm" color={mutedColor} fontWeight="300">
            For business inquiries, email me at<br />
            <Link href={`mailto:${email}`} color={color}>{email}</Link>
          </Text>
        </Box>
      </Flex>

      {/* MOTIVATION SECTION */}
      <Flex direction="column" minH={{ base: "auto", md: "60vh" }} py={{ base: 16, md: 20 }} pl={{ base: 8, md: 16 }} pr={{ base: 8, lg: 32 }}>
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} mb={{ base: 10, md: 16 }} maxW="500px">
          <Text fontSize="xl" letterSpacing="widest" mb={4} fontWeight="400" textTransform="uppercase">Motivation</Text>
          <Divider borderColor={mutedColor} />
        </MotionBox>
        
        <MotionFlex initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} direction={{ base: "column-reverse", lg: "row" }} justify="space-between" align={{ base: "flex-start", lg: "flex-start" }} gap={{ base: 10, md: 16 }}>
          <Box flex="1" color={mutedColor} fontSize={{ base: "sm", md: "md" }} fontWeight="300" lineHeight="2">
						I'm a full-stack engineer with a growing focus on AI tooling and developer infrastructure. I also build systems like Tuis.
            <br/><br/>
						Recently, my interests have shifted toward creating low-level tooling—Tuis, MCPS, Skills—and improving how AI agents operate, from token efficiency to execution semantics.
            <br/><br/>
						I'm currently investing my time in understanding AI system internals and model pipelines so I can build more robust, scalable tools that enhance real-world workflows.
          </Box>
          <Box flex="1" w="100%">
             <Box w="100%" maxW={{ base: "100%", md: "600px" }} ml="auto" borderRadius="sm" overflow="hidden">
                 <Image src="/profile.jpg" alt="Profile" w="100%" h="auto" objectFit="cover" filter="grayscale(100%)" transition="all 0.4s ease" _hover={{ filter: "grayscale(0%) brightness(1.1)" }} />
             </Box>
          </Box>
        </MotionFlex>
      </Flex>

      {/* SKILLS SECTION */}
      <Flex direction="column" minH={{ base: "auto", md: "60vh" }} py={{ base: 16, md: 20 }} pl={{ base: 8, md: 16 }} pr={{ base: 8, lg: 32 }}>
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} mb={16} w="100%">
          <Text fontSize="xl" letterSpacing="widest" mb={4} fontWeight="400" textTransform="uppercase">Skills</Text>
          <Divider borderColor={mutedColor} />
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={12} w="100%">
           {techCategories.map((category, i) => (
             <MotionBox key={category} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant} transition={{ delay: i * 0.1 }}>
               <Text fontSize="lg" letterSpacing="widest" fontWeight="300" color={color} mb={8} textTransform="uppercase">{category}</Text>
               <Flex wrap="wrap" gap={3}>
                 {data.techStack[category] && data.techStack[category].map((skill: any) => (
                   <Box key={skill.name} px={5} py={2} border="1px solid" borderColor={mutedColor} color={mutedColor} borderRadius="full" cursor="default" transition="all 0.2s" _hover={{ borderColor: color, color: color }}>
                     <Text fontSize="sm" color="inherit" fontWeight="300" transition="all 0.2s">{skill.name}</Text>
                   </Box>
                 ))}
               </Flex>
             </MotionBox>
           ))}
        </SimpleGrid>
      </Flex>

      <Flex w="100%" justify="flex-end" direction="column" align="flex-end" pr={{ base: 8, lg: 32 }} pb={20} gap={5}>
        <Box cursor="pointer" onClick={() => { setActiveTab("career"); window.scrollTo(0, 0); }}>
          <Text fontSize="md" letterSpacing="widest" fontWeight="300" color={mutedColor} transition="all 0.3s" _hover={{ color: color }}>
            CAREER &rarr;
          </Text>
        </Box>
        <Box cursor="pointer" onClick={() => { setActiveTab("works"); window.scrollTo(0, 0); }}>
          <Text fontSize="md" letterSpacing="widest" fontWeight="300" color={mutedColor} transition="all 0.3s" _hover={{ color: color }}>
            WORKS &rarr;
          </Text>
        </Box>
        <Box cursor="pointer" onClick={() => { setActiveTab("education"); window.scrollTo(0, 0); }}>
          <Text fontSize="md" letterSpacing="widest" fontWeight="300" color={mutedColor} transition="all 0.3s" _hover={{ color: color }}>
            EDUCATION &rarr;
          </Text>
        </Box>
      </Flex>

    </Box>
  );

  const CareerSection = () => (
    <Flex direction="column" minH="100vh" py={{ base: 8, md: 20 }} pl={{ base: 8, md: 16 }} pr={{ base: 8, lg: 32 }}>
      <SectionHeader title="Career" />
      
      <VStack spacing={{ base: 16, md: 24 }} align="start" w="100%">
        {data.workExperience.map((job, index) => (
           <MotionFlex key={index} w="100%" direction={{ base: "column", xl: "row" }} gap={{ base: 6, xl: 16 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
              <Box w={{ base: "100%", xl: "300px" }} flexShrink={0}>
                <Text fontSize="2xl" fontWeight="300" color={color} mb={2}>{job.companyName}</Text>
                <Text fontSize="md" color={mutedColor} mb={2}>{job.title}</Text>
                <Text fontSize="sm" color={mutedColor} opacity={0.7} letterSpacing="widest" textTransform="uppercase">{job.period}</Text>
              </Box>
              <Box flex="1">
                <Text fontSize={{ base: "sm", md: "md" }} color={mutedColor} lineHeight="1.8" fontWeight="300" mb={8}>
                  {job.blurb}
                </Text>
                <Flex wrap="wrap" gap={2}>
                  {job.tech && job.tech.map((t) => (
                    <Text key={t} fontSize="xs" color={color} px={3} py={1} border="1px solid" borderColor={mutedColor} borderRadius="md" opacity={0.8}>
                      {t}
                    </Text>
                  ))}
                </Flex>
              </Box>
           </MotionFlex>
        ))}
      </VStack>

      <Flex w="100%" justify="flex-end" direction="column" align="flex-end" mt={32} pb={{ base: 10, md: 0 }} gap={5}>
        <Box cursor="pointer" onClick={() => { setActiveTab("works"); window.scrollTo(0, 0); }}>
          <Text fontSize="md" letterSpacing="widest" fontWeight="300" color={mutedColor} transition="all 0.3s" _hover={{ color: color }}>
            WORKS &rarr;
          </Text>
        </Box>
        <Box cursor="pointer" onClick={() => { setActiveTab("education"); window.scrollTo(0, 0); }}>
          <Text fontSize="md" letterSpacing="widest" fontWeight="300" color={mutedColor} transition="all 0.3s" _hover={{ color: color }}>
            EDUCATION &rarr;
          </Text>
        </Box>
      </Flex>
    </Flex>
  );

  const WorksSection = () => (
    <Flex direction="column" minH="100vh" py={{ base: 8, md: 20 }} pl={{ base: 8, md: 16 }} pr={{ base: 8, lg: 32 }}>
      <SectionHeader title="Works" />

      <VStack spacing={{ base: 20, md: 32 }} align="start" w="100%">
        {data.projects.map((project, index) => (
           <MotionFlex key={index} w="100%" direction={{ base: "column-reverse", xl: "row" }} justify="space-between" align={{ base: "flex-start", xl: "center" }} gap={{ base: 10, xl: 16 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
              <Box flex="1" maxW={{ base: "100%", xl: "500px" }}>
                <Text fontSize="3xl" fontWeight="300" color={color} mb={6}>{project.name}</Text>
                <Text fontSize={{ base: "sm", md: "md" }} color={mutedColor} lineHeight="1.8" fontWeight="300" mb={10}>
                  {project.description}
                </Text>
                {project.github && (
                  <Link href={project.github} isExternal _hover={{ textDecoration: 'none' }}>
                    <Box display="inline-block" pb={1} borderBottom="1px solid" borderColor={mutedColor} transition="all 0.3s" color={mutedColor} _hover={{ borderColor: color, color: color }}>
                      <Text fontSize="sm" letterSpacing="widest" color="inherit" textTransform="uppercase">View on Github</Text>
                    </Box>
                  </Link>
                )}
              </Box>
              <Box flex="1" w="100%" maxW={{ base: "100%", xl: "600px" }}>
                {project.screenshots && project.screenshots.length > 0 && (
                  <Box w="100%" borderRadius="sm" overflow="hidden">
                    <Image src={project.screenshots[0].image} alt={project.name} w="100%" h="auto" objectFit="cover" filter="grayscale(100%) brightness(0.9)" transition="all 0.4s ease" _hover={{ filter: "grayscale(0%) brightness(1)" }} />
                  </Box>
                )}
              </Box>
           </MotionFlex>
        ))}
      </VStack>

      <Flex w="100%" justify="flex-end" direction="column" align="flex-end" mt={32} pb={{ base: 10, md: 0 }} gap={5}>
        <Box cursor="pointer" onClick={() => { setActiveTab("education"); window.scrollTo(0, 0); }}>
          <Text fontSize="md" letterSpacing="widest" fontWeight="300" color={mutedColor} transition="all 0.3s" _hover={{ color: color }}>
            EDUCATION &rarr;
          </Text>
        </Box>
      </Flex>
    </Flex>
  );

  const EducationSection = () => (
    <Flex direction="column" minH="100vh" py={{ base: 8, md: 20 }} pl={{ base: 8, md: 16 }} pr={{ base: 8, lg: 32 }}>
      <SectionHeader title="Education" />

      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={{ base: 10, md: 16 }} w="100%">
        {data.education.map((edu, index) => (
           <MotionBox key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} transition={{ delay: index * 0.1 }}>
              <Text fontSize="2xl" fontWeight="300" color={color} mb={2}>{edu.institution}</Text>
              <Text fontSize="md" color={mutedColor} mb={2}>{edu.level} in {edu.major}</Text>
              <Text fontSize="sm" color={mutedColor} opacity={0.7} letterSpacing="widest" textTransform="uppercase">{edu.period}</Text>
           </MotionBox>
        ))}
      </SimpleGrid>

      <Flex w="100%" justify="flex-end" direction="column" align="flex-end" mt={32} pb={{ base: 10, md: 0 }} gap={5}>
        <Box cursor="pointer" onClick={() => { setActiveTab("home"); window.scrollTo(0, 0); }}>
          <Text fontSize="md" letterSpacing="widest" fontWeight="300" color={mutedColor} transition="all 0.3s" _hover={{ color: color }}>
            HOME &rarr;
          </Text>
        </Box>
      </Flex>
    </Flex>
  );

  return (
    <FontWrapper>
      <Box w="100%" minH="100vh" bg={bg} color={color} scrollBehavior="smooth">
        
        {/* MOBILE HEADER - sticky to top */}
        <Box 
          display={{ base: "block", md: "none" }} 
          position="sticky"
          top="0"
          zIndex={20}
          bg={bg}
          w="100%" 
          pt={6} 
          px={6}
          pb={4}
          borderBottom="1px solid"
          borderColor={borderlineColor}
        >
          <Flex justify="space-between" align="center">
            <HStack spacing={4}>
              <NavItem id="home" label="HOME" isMobile />
              <NavItem id="career" label="CAREER" isMobile />
              <NavItem id="works" label="WORKS" isMobile />
              <NavItem id="education" label="EDU" isMobile />
            </HStack>
            
            <HStack spacing={4} align="center">
              {social_media.map((social) => (
                <Link key={social.name} href={social.link} isExternal color={color} _hover={{ color: mutedColor }} _focus={{ outline: "none", boxShadow: "none" }}>
                  <social.icon width="14px" height="14px" />
                </Link>
              ))}
              <Link href={`mailto:${email}`} color={color} _hover={{ color: mutedColor }} _focus={{ outline: "none", boxShadow: "none" }}>
                <MailIcon width="14px" height="14px" />
              </Link>
              <Link href="https://drive.google.com/file/d/10iI2tDjdhJ4Qi710ji7cces2ZTYuLh-U/view?export=download" isExternal color={color} _hover={{ color: mutedColor, textDecoration: 'none' }} _focus={{ outline: "none", boxShadow: "none" }}>
                <Text fontSize="12px" fontWeight="600">CV</Text>
              </Link>
            </HStack>
          </Flex>
        </Box>


        {/* DESKTOP SIDEBAR */}
        <Box 
          display={{ base: "none", md: "flex" }}
          position="fixed"
          top="0"
          left="0"
          w={sidebarWidth}
          h="100vh"
          borderRight="1px solid transparent" 
          pt={12} 
          pb={8} 
          px={10}
          zIndex={10}
          flexDirection="column"
          justifyContent="space-between"
        >
          <VStack align="start" spacing={6}>
            <NavItem id="home" label="HOME" />
            <NavItem id="career" label="CAREER" />
            <NavItem id="works" label="WORKS" />
            <NavItem id="education" label="EDUCATION" />
          </VStack>

          <VStack align="start" spacing={5} pb={8}>
            {social_media.map((social) => (
              <Link key={social.name} href={social.link} isExternal color={color} _hover={{ color: mutedColor }} _focus={{ outline: "none", boxShadow: "none" }}>
                <social.icon width={iconWidth} height={iconWidth} />
              </Link>
            ))}
            <Link href={`mailto:${email}`} color={color} _hover={{ color: mutedColor }} _focus={{ outline: "none", boxShadow: "none" }}>
              <MailIcon width={iconWidth} height={iconWidth} />
            </Link>
            <Link href="https://drive.google.com/file/d/10iI2tDjdhJ4Qi710ji7cces2ZTYuLh-U/view?export=download" isExternal color={color} _hover={{ color: mutedColor, textDecoration: 'none' }} _focus={{ outline: "none", boxShadow: "none" }}>
              <Text fontSize="sm" fontWeight="600">CV</Text>
            </Link>
          </VStack>

          <Box>
            <Text fontSize="xs" color={mutedColor} fontWeight="300">© {data.name}</Text>
          </Box>
        </Box>

        {/* MAIN SCROLLING CONTENT AREA */}
        <Flex 
          direction="column" 
          w="100%" 
          ml={{ base: 0, md: sidebarWidth }} 
          maxW={{ base: "100%", md: `calc(100% - ${sidebarWidth})` }}
          pb={32}
        >
          <AnimatePresence mode="wait">
             <MotionBox 
               key={activeTab} 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
             >
               {activeTab === "home" && <HomeSection />}
               {activeTab === "career" && <CareerSection />}
               {activeTab === "works" && <WorksSection />}
               {activeTab === "education" && <EducationSection />}
             </MotionBox>
          </AnimatePresence>
        </Flex> 

      </Box>
    </FontWrapper>
  );
}

const FontWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const linkId = "montserrat-font";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);
  
  return (
    <Box style={{ fontFamily: "'Montserrat', sans-serif" }} textAlign="left">
      {children}
    </Box>
  );
}

export default Main;
