import { Flex, Image, useColorModeValue } from "@chakra-ui/react";
import darkmap from "../../../imgs/roadmap/darkmap.svg";
import lightmap from "../../../imgs/roadmap/lightmap.svg";
const Map = () => {
	const img = useColorModeValue(lightmap, darkmap)
	const bg = useColorModeValue('#edf2f6', '#2c313d')
  return (
    <Flex
			backgroundColor={bg}
      w={"90%"}
      ml={"auto"}
      mr={"auto"}
      height={"400px"}
      borderRadius={"md"}
			p={'20px'}
      shadow={"lg"}
    >
      <Image src={img} w={"100%"} borderRadius={"md"} />
    </Flex>
  );
};

export default Map;
