import { Box, Image, Text } from "@chakra-ui/react";
import btcSrc from "../assets/coin2.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"white"} w={"full"} h={"95vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image w={"full"} h={"25rem"} objectFit={"contain"} src={btcSrc} />
      </motion.div>

      <Text
        fontSize="4xl"
        textAlign="center"
        fontWeight="bold"
        color="blackAlpha.900"
        mt="-20"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        My{" "}
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Text color="#48BB68">Crypto</Text>
        </span>{" "}
        Exchange
      </Text>
    </Box>
  );
};

export default Home;
