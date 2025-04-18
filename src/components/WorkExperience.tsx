import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import BriefCase from "../imgs/icons/Briefcase";
import Code from "../imgs/icons/Code";

import Data, { Work } from "../data";
import { CircleIconWrapper } from "./CircleIconWrapper";

function WorkExperience({ element }: SectionProps) {
  const { workExperience } = Data;

  const CompanyListJSX: JSX.Element[] = [];
  const CompanyDetailJSX: JSX.Element[] = [];

  workExperience.forEach((company, index) => {
    const { title, period, responsibilities, companyName } = company;
    CompanyListJSX.push(
      <Tab
        key={index}
        _selected={{
          boxShadow: "none",
          borderBottom: "5px solid red",
        }}
      >
        {companyName}
      </Tab>,
    );
    const TitleJSX = (
      <Text fontWeight={"bold"} fontSize={{ base: "25px" }}>
        {title}
      </Text>
    );
    const PeriodJSX = <Text fontSize={{ base: "25px" }}>{period}</Text>;

    const ResponsibilitiesJSX = responsibilities.map(
      (responsibility, index) => {
        return (
          <ListItem key={index}>
            <ListIcon
              as={Code}
              color="green.500"
            />
            {responsibility}
          </ListItem>
        );
      },
    );

    CompanyDetailJSX.push(
      <TabPanel marginLeft={"auto"} key={index}>
        <VStack>
          <List spacing={4} marginTop={4}>
            {TitleJSX}
            {PeriodJSX}
            {ResponsibilitiesJSX}
          </List>
        </VStack>
      </TabPanel>,
    );
  });

  return (
    <>
      <Box id="WorkExperience"></Box>
      <Box maxWidth={"100vw"} ref={element}>
        <HStack justifyContent={"center"} marginY={10}>
          <CircleIconWrapper icon={BriefCase} />
          <Text
            fontSize={{
              base: "20px",
              md: "30px",
              lg: "40px",
            }}
          >
            Work Experience
          </Text>
        </HStack>
        <Tabs>
          <TabList
            overflowX={"auto"}
            overflowY="hidden"
            justifyContent={"center"}
          >
            {CompanyListJSX}
          </TabList>

          <TabPanels textAlign={"start"}>
            {CompanyDetailJSX}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

const Career = ({ element }) => {
  const { workExperience } = Data;
  const experiences_jsx = workExperience.map((experience) => {
    return <Experience experience={experience} />;
  });
  return (
    <Flex gap={5} flexDir="column" p={"50px"}>
      <Text textAlign={"left"} fontSize={"40px"}>Career</Text>
      <Divider />
      <Flex flexDir={"column"} gap={"60px"}>
        {experiences_jsx}
      </Flex>
    </Flex>
  );
};

const Experience = ({ experience }: { experience: Work }) => {
  const tech_jsx = experience.tech.map((tech) => (
    <Text
      p={3}
      borderRadius={"99px"}
      bgColor={"rgb(64 203 118 / 20%)"}
      fontSize={".75rem"}
			fontWeight={500}
			px={'.75rem'}
			py={'.25rem'}
    >
      {tech}
    </Text>
  ));
  return (
    <Flex flexDir={{ base: "column", md: "row" }}>
      <Text w={{ base: "100%", md: "25%", lg: "20%" }} textAlign="left" color={"#64748b"}>
        {experience.period}
      </Text>
      <Flex
        flexDir="column"
        wrap={"wrap"}
        w={{ base: "100%", md: "70%" }}
        textAlign={"start"}
        gap={1}
      >
        <Text w={"100%"} fontWeight={'bold'}>{experience.companyName}</Text>
        <Text w={"100%"} color={"#64748b"}>{experience.title}</Text>
        <Text w={"100%"} color={"#64748b"}>{experience.blurb}</Text>
        <Flex wrap={"wrap"} gap={3} mt={3}>{tech_jsx}</Flex>
      </Flex>
    </Flex>
  );
};

export default Career;
