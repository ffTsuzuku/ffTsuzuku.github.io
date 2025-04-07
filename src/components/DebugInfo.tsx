import { useContext } from "react";
import DebugContext from "../context/DebugContext";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const DebugInfo = () => {
  const { show_debug, info } = useContext(DebugContext);
  const bg = useColorModeValue("black", "white");
  const text = useColorModeValue("white", "black");

  if (!show_debug) {
    return <></>;
  }

  const information = Object.keys(info).map((key) => {
		let value = info[key]
		if (typeof value === 'object') value = JSON.stringify(value)

    return <Text w={'100%'}>{`${key}: ${value}`}</Text>;
  });
  console.log({ information });
  return (
    <Flex
			maxW={'300px'}
			maxH={'300px'}
			overflow={'auto'}
			wrap={'wrap'}
			borderRadius={"md"}
      position={"fixed"}
      p={5}
      bgColor={bg}
      color={text}
      id={"debugger"}
      top={"10%"}
      left={"10%"}
    >
      {information}
    </Flex>
  );
};

export default DebugInfo;
