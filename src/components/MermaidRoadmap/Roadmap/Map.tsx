import { Flex, Image, useColorModeValue } from "@chakra-ui/react";
import darkmap from "../../../imgs/roadmap/darkmap.svg";
import lightmap from "../../../imgs/roadmap/lightmap.svg";
import { MapInteractionCSS } from "react-map-interaction";

const Map = () => {
  const img = useColorModeValue(lightmap, darkmap);
  const bg = useColorModeValue("#edf2f6", "#2c313d");
  return (
    <Flex w="90%" bgColor={bg} borderRadius={"md"} ml={"auto"} mr={"auto"} p="20px">
      <MapInteractionCSS
        minScale={0.5}
        maxScale={3}
        translationBounds={{
          xMax: 400,
          yMax: 200,
        }}
        showControls
      >
        <Image src={img} height={"400px"} />
      </MapInteractionCSS>
    </Flex>
  );
};

export default Map;
