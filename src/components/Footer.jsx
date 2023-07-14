import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";

const avatarSrc = "https://avatars.githubusercontent.com/u/77398124?v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} display="flex">
            <span style={{ marginRight: "10px" }}>
              <Text color="#48BB78">About</Text>
            </span>{" "}
            Us
          </Text>
          <Text
            fontFamily={"italic"}
            fontSize={"m"}
            fontWeight={"hairline"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are a leading crypto trading app in India, offering our expert
            guidance at an affordable price.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text color="#48BB78">Developer</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
