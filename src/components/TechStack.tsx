import {
  Divider,
  Flex,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import data, { SkillType } from "../data";
import { Skill as SkillI } from "../data";

const Skill = ({ skill }: { skill: SkillI }) => {
  const { colorMode } = useColorMode();
  const bg_color = useColorModeValue("#8ca19c", "#14211e");
  const Icon = skill.icon;
  return (
    <Flex
      m={"0px"}
      p={3}
      gap={3}
      bgColor={bg_color}
      color={"white"}
      fontWeight={"bold"}
      width={"300px"}
      borderRadius={".375rem"}
      alignItems={"center"}
    >
      <Flex
        p={3}
        bgColor={skill.iconBoxColor?.[colorMode]}
        borderRadius={".375rem"}
      >
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
    const SkillsJSX = skills.map((skill) => (
      <Skill skill={skill} key={skill.name} />
    ));
    return (
      <VStack alignItems={"flex-start"} key={section_name}>
        <Text>{section_name}</Text>
        <Flex flexWrap={"wrap"} justifyContent={"flex-start"} gap={5}>
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
