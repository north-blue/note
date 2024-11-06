import { Container, Stack, Text, useColorMode } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";
import { useState } from "react";
import AboveTheFold from "./components/AboveTheFold";
import Footer from "./components/Footer";


// updated this after recording. Make sure you do the same so that it can work in production
export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {
  const [users, setUsers] = useState([]);
const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      minH={"100vh"}
      bgColor={colorMode === "light" ? "blue.100" : "blue.200"}
      
    >
      <AboveTheFold />

      <Container id="target-section" maxW={"1200px"} minH={"100vh"} my={4}>
        <Navbar setUsers={setUsers} />

        <Text
          fontSize={{ base: "xl", md: "100" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
          bgColor={"#403B36"}
          fontFamily={"Titan One"}
          bgClip={"text"}
        >
          NOTESPRO
        </Text>

        <UserGrid users={users} setUsers={setUsers} />
       
      </Container>
      <Footer  />
    </Stack>
  );
}

export default App;
