import { Flex, Box } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      color={"gray.300"}
      gap={1}
      fontSize={20}
      flexDir={"column"}
      width={"200px"}
    >
      <Box cursor={"pointer"} _hover={{ color: "gray.100" }}>
        Profile
      </Box>
      <Box cursor={"pointer"} _hover={{ color: "gray.100" }}>
        Games
      </Box>
      <Box cursor={"pointer"} _hover={{ color: "gray.100" }}>
        Library
      </Box>
      <Box cursor={"pointer"} _hover={{ color: "gray.100" }}>
        Community
      </Box>
    </Flex>
  );
};

export default Nav;
