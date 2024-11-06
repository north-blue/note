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

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Container marginBottom={"10"}  maxW="100%">
        <Box
          px={5}
          
          borderRadius={5}
          bgColor={"#C5CDF3"}
          justifyContent={"space-between"}
          maxW="100%"
        >
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
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                NOTESPRO
              </Text>
            </Flex>

            <Flex>
              <Text
                fontFamily={"Nunito, sans - serif"}
                fontWeight={"medium"}
                fontSize={"23px"}
                color={"#403B36"}
                display={{ base: "none", md: "block" }}
                marginRight={"10"}
                onClick={() => {
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                about
              </Text>
              <Text
                fontFamily={"Nunito, sans - serif"}
                fontWeight={"medium"}
                fontSize={"23px"}
                color={"#403B36"}
                display={{ base: "none", md: "block" }}
                onClick={() => {
                  document
                    .getElementById("target-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                notes
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
