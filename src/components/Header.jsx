import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/coin2.png";

const Header = () => {
  return (
    <Flex
      p={{ sm: "4", md: "4", lg: "4" }}
      pl={{ sm: "4", md: "4", lg: "6" }}
      pr={{ base: "4", md: "4", lg: "6" }}
      shadow="base"
      bgGradient="linear(to-r,rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.90))"
      justify="space-between"
      align="center"
    >
      <img src={logo} alt="Logo" style={{ maxHeight: "45px" }} />
      <Flex gap={{ base: "4", md: "6", lg: "8" }}>
        <Button variant="unstyled" color="white" pl={{ base: "4", md: "8" }}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="unstyled" color="white">
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant="unstyled" color="white">
          <Link to="/coins">Coins</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
