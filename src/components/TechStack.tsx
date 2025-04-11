import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  Link,
  Progress,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import VSC from "../imgs/icons/VSC";

import { CircleIconWrapper } from "./CircleIconWrapper";
import data from "../data";

function TechStack({ element }: SectionProps) {
  const bgColor = useColorModeValue("#DEE4E7", "#282834");

  const SkillsJSX = data.techStack.map((skill) => {
    return (
      <CircularProgress
        key={skill.name}
        value={skill.proficiency}
        color="purple.300"
        size={"200px"}
      >
        <CircularProgressLabel fontSize={{ base: "20px" }}>
          <skill.icon
            fill={skill.iconFill}
            size={"30px"}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          />
          <Text>{skill.name}</Text>
          <Text>{`${skill.proficiency}%`}</Text>
        </CircularProgressLabel>
      </CircularProgress>
    );
  });
  return (
    <VStack
      backgroundColor={bgColor}
      paddingY={"50px"}
      ref={element}
    >
      <Link id="TechStack" />
      <Flex maxWidth={"100vw"} justifyContent={"center"}>
        <HStack justifyContent={"center"}>
          <CircleIconWrapper icon={VSC} />
          <Text
            fontSize={{
              base: "20px",
              md: "30px",
              lg: "40px",
            }}
          >
            Tech Stack
          </Text>
          <Progress value={80} />
        </HStack>
      </Flex>
      <HStack
        justifyContent={"center"}
        wrap={"wrap"}
        width={"80%"}
      >
        {SkillsJSX}
      </HStack>
    </VStack>
  );
}

export default TechStack;
