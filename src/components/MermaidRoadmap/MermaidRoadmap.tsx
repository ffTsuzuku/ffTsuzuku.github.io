import mermaid from "mermaid";
import { useEffect, useRef } from "react";
import flowchart from "./flowchart";
import { Flex, useColorModeValue } from "@chakra-ui/react";

		// Initialize Mermaid with the selected theme
const MermaidRoadmap = () => {
  const bg_color = useColorModeValue("#323533", "#272d3a");
	const ref = useRef<HTMLDivElement|undefined>();
 
	useEffect(() => {
		mermaid.initialize({
			startOnLoad: true,
			theme: 'base', 
			themeVariables: {
				lineColor: '#FFFFFF'
			}
		})
		mermaid.run()
	}, [])
 
  return (
    <Flex
      ref={ref}
      id="graphDiv"
      ml={"auto"}
      mr={"auto"}
      w={"90%"}
      justifyContent={"center"}
      className="mermaid"
      shadow={"lg"}
      borderRadius={"md"}
      bgColor={bg_color}
      height={["400px"]}
      p={5}
    >
			{flowchart}
    </Flex>
  );
};

export default MermaidRoadmap;
