import { Badge, Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";

interface Props {
  badge?: string;
  badges?: Array<{ text: string; onClick?: () => void }>;
  badgeInfo?: string;
  variant?: "vetical" | "horizontal";
  image?: string;
  fallback?: string;
  title?: string;
  subTitle?: string;
  text?: string;
  imageSize?: { width: "string"; height: "string" };
}

function Card({
  badge,
  badgeInfo,
  image,
  fallback,
  title,
  subTitle,
  text,
  variant,
  imageSize,
  badges,
}: Props) {
  const badgeFill = useColorModeValue("#8ca19c", "purple.400");
  const badges_jsx = badges?.map((badge) => {
    return (
      <Badge
				key={badge.text}
        borderRadius="full"
        px="2"
        py="1"
        bgColor={badgeFill}
        onClick={badge.onClick}
        cursor={badge?.onClick ? "pointer" : "default"}
      >
        {badge.text}
      </Badge>
    );
  });
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow={"2xl"}
    >
      <Image
        src={image}
        alt={fallback}
        fit="cover"
        loading="lazy"
        width={imageSize?.width}
        height={imageSize?.height}
      />

      <Box p="6">
        <Box
          textAlign={"left"}
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box textAlign={"left"}>{subTitle}</Box>

        <Box textAlign={"left"} height={"50px"} overflow={"hidden"}>{text}</Box>

        {badge && (
          <Box display="flex" alignItems="baseline">
            <Badge
              borderRadius="full"
              px="2"
              py="1"
              colorScheme={"purple"}
            >
              {badge}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
              ml="2"
            >
              {badgeInfo}
            </Box>
          </Box>
        )}
				<Flex gap={3} mt={3}>
					{badges_jsx}
				</Flex>
      </Box>
    </Box>
  );
}

export default Card;
