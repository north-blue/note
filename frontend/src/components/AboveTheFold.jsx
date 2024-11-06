import {
  VStack,
  Text,
  Image,
  Button,
  Container,
  Flex,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

import React from "react";

function AboveTheFold() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div id="home">
      <Container maxW={"auto"} bgColor={"#C5CDF3"}>
        <Box px={5} paddingTop={"15px"} borderRadius={5} bgColor={"#C5CDF3"}>
          <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
            {/* Left side */}
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
              display={{ base: "none", sm: "flex" }}
            >
              <Text
                fontFamily={"Titan One"}
                fontWeight={"bold"}
                fontSize={"43px"}
                color={"#403B36"}
                display={{ base: "none", md: "block" }}
                onClick={() => {
                  document
                    .getElementById("target-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                NOTESPRO
              </Text>
            </Flex>
            {/* Right side */}
            <Flex gap={3} alignItems={"center"}>
              <Button
                fontFamily={"Nunito, sans - serif"}
                fontWeight={"bold"}
                bgColor={"#87C6E0"} // Set the color scheme
                size={{ base: "sm", md: "md", lg: "lg" }} // Responsive button sizes
                padding={{
                  base: "10px 20px",
                  md: "15px 28px",
                  lg: "20px 42px",
                }} // Responsive padding
                fontSize={{ base: "sm", md: "md", lg: "lg" }} // Responsive font size
                borderRadius="md" // Optional: rounded corners
                width={{ base: "100%", md: "auto" }} // Full width on small screens
                onClick={() => {
                  document
                    .getElementById("target-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                GET STARTED
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>

      <VStack
        justifyContent="center"
        alignItems="center"
        h="100vh"
        bgColor={"#C5CDF3"}
      >
        <VStack>
          <Text
            fontSize={{ base: "xl", md: "100" }}
            fontWeight={"bold"}
            letterSpacing={"2px"}
            textTransform={"uppercase"}
            textAlign={"center"}
            mb={8}
            as={"span"}
            bgColor={"#403B36"}
            fontFamily={"Titan One"}
            bgClip={"text"}
          >
            NOTESPRO
          </Text>

          <Image
            src="/laptopimage.png"
            alt="typing the notes"
            width={{ base: "100%", md: "50%", lg: "30%" }} // Responsive width
            height="auto" // Maintain aspect ratio
          />

          <Text
            fontSize={{ base: "xl", md: "30" }}
            fontWeight={"bold"}
            letterSpacing={"2px"}
            textTransform={"uppercase"}
            textAlign={"center"}
            mb={8}
            as={"span"}
            bgColor={"#403B36"}
            fontFamily={"Nunito, sans - serif"}
            bgClip={"text"}
          >
            EASY WAY TO BE PRODUCTIVE
          </Text>

          <Text
            fontSize={{ base: "xl", md: "18" }}
            fontWeight={"medium"}
            letterSpacing={"2px"}
            textTransform={"uppercase"}
            textAlign={"center"}
            mb={8}
            as={"span"}
            bgColor={"#403B36"}
            fontFamily={"Nunito, sans - serif"}
            bgClip={"text"}
          >
            MAKE YOU THOUGHTS EASY AND <br /> ORGANIZED.
          </Text>

          <Button
            fontFamily={"Nunito, sans - serif"}
            fontWeight={"bold"}
            bgColor={"#87C6E0"} // Set the color scheme
            size={{ base: "sm", md: "md", lg: "lg" }} // Responsive button sizes
            padding={{ base: "10px 20px", md: "15px 28px", lg: "20px 42px" }} // Responsive padding
            fontSize={{ base: "sm", md: "md", lg: "lg" }} // Responsive font size
            borderRadius="md" // Optional: rounded corners
            width={{ base: "100%", md: "auto" }} // Full width on small screens
            onClick={() => {
              document
                .getElementById("target-section")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            GET STARTED
          </Button>
        </VStack>
      </VStack>
    </div>
  );
}

export default AboveTheFold;
