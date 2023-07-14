import { Box, Spinner, VStack } from "@chakra-ui/react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(1.6)"}>
        <Spinner size={"xl"} color={"#48BB78"} />
      </Box>
    </VStack>
  );
};

export default Loader;
