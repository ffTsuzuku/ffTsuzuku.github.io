import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import Data, { Work } from "../data";

const Career = ({ element }) => {
  const { workExperience } = Data;
  const experiences_jsx = workExperience.map((experience) => {
    return (
      <Experience
        experience={experience}
        key={experience.companyName + experience.period}
      />
    );
  });
  return (
    <Flex gap={5} flexDir="column" p={"50px"}>
      <Text textAlign={"left"} fontSize={"40px"}>Career</Text>
      <Box id="WorkExperience"></Box>
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
      key={tech}
      p={3}
      borderRadius={"99px"}
      bgColor={"rgb(64 203 118 / 20%)"}
      fontSize={".75rem"}
      fontWeight={500}
      px={".75rem"}
      py={".25rem"}
    >
      {tech}
    </Text>
  ));
  return (
    <Flex flexDir={{ base: "column", md: "row" }}>
      <Text
        w={{ base: "100%", md: "25%", lg: "20%" }}
        textAlign="left"
        color={"#64748b"}
      >
        {experience.period}
      </Text>
      <Flex
        flexDir="column"
        wrap={"wrap"}
        w={{ base: "100%", md: "70%" }}
        textAlign={"start"}
        gap={1}
      >
        <Text w={"100%"} fontWeight={"bold"}>{experience.companyName}</Text>
        <Text w={"100%"} color={"#64748b"}>{experience.title}</Text>
        <Text w={"100%"} color={"#64748b"}>{experience.blurb}</Text>
        <Flex wrap={"wrap"} gap={3} mt={3}>{tech_jsx}</Flex>
      </Flex>
    </Flex>
  );
};

export default Career;
