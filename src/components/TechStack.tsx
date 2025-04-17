import {
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  HStack,
  Link,
  Progress,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import VSC from "../imgs/icons/VSC";

import { CircleIconWrapper } from "./CircleIconWrapper";
import data, { SkillType } from "../data";
import { Skill as SkillI } from "../data";

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
            style={{ marginLeft: "auto", marginRight: "auto" }}
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

const Skill = ({ skill }: { skill: SkillI }) => {
	const {colorMode} = useColorMode()
	const bg_color = useColorModeValue('#8ca19c', '#14211e')
  const Icon = skill.icon;
  return (
    <Flex
			m={'0px'}
      p={3}
      gap={3}
      bgColor={bg_color}
      width={"300px"}
      borderRadius={".375rem"}
      alignItems={"center"}
    >
      <Flex p={3} bgColor={skill.iconBoxColor?.[colorMode]} borderRadius={".375rem"}>
        <Icon
          fill={skill.iconFill}
					stroke={skill.stroke}
          size={"30px"}
          width={"30px"}
          height={"30px"}
        />
      </Flex>
      {skill.name}
    </Flex>
  );
};

const SkillSet = ({ element }) => {
  const bgColor = useColorModeValue("#DEE4E7", "#282834");
  const sections = Object.keys(data.techStack);

  const SectionJSX = sections.map((section_name) => {
    const skills = data.techStack[section_name as SkillType];
    const SkillsJSX = skills.map((skill) => <Skill skill={skill} />);
    return (
      <VStack alignItems={"flex-start"}>
        <Text>{section_name}</Text>
				<Flex flexWrap={'wrap'} justifyContent={'flex-start'} gap={5}>
					{SkillsJSX}
				</Flex>
      </VStack>
    );
  });

  return (
    <VStack
      backgroundColor={bgColor}
      p={"50px"}
      ref={element}
      alignItems={"flex-start"}
    >
      <Link id="TechStack" />
      <Text fontSize={"40px"}>Skills</Text>
      <Divider />
      <VStack gap={5} alignItems={"flex-start"}>
        {SectionJSX}
      </VStack>
    </VStack>
  );
};

export default SkillSet;
