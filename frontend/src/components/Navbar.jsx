import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";

const Navbar = ({ setUsers }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW={"900px"}
      position={"sticky"}
      top={"0"}
      zIndex={"sticky"}
      marginTop={"40px"}
    >
      <Box
        px={4}
        my={4}
        borderRadius={5}
        /*bg={useColorModeValue("#C5CDF3", "#596DD0")}*/
      >
        <Flex h="16" alignItems={"center"} justifyContent={"flex-end"}>
          {/* Right side */}
          <Flex gap={3} alignItems={"center"} justifyContent={"left"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
            <CreateUserModal setUsers={setUsers} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};
export default Navbar;
