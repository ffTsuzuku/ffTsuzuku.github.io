import { Divider, Flex, Link, Text } from "@chakra-ui/react";
import Data from "../data";
import { CSSProperties } from "react";
import Card from "./Card";

const open_link = (link) => {
	window.open(link, '__blank')
}
const Projects = () => {
  const { projects } = Data;
  const projects_jsx = projects.map((project) => {
		const link = {text: 'Github', onClick: () => open_link(project.github)}
    return (
      <Card
        key={project.name}
        image={project.screenshots[0].image}
        title={project.name}
        text={project.description}
        imageSize={{ width: undefined, height: "214px" }}
				badges={[link]}
      />
    );
  });
  return (
    <Flex gap={5} flexDir="column" p={"50px"}>
      <Text textAlign={"left"} fontSize={"40px"}>Projects</Text>
      <Divider />
      <Link id="Projects" />
      <Flex gap={5} wrap={"wrap"}>
        {projects_jsx}
      </Flex>
    </Flex>
  );
};

export default Projects;
