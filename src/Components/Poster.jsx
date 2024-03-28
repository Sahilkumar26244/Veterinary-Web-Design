import React from "react";
import poster from "../assets/poster.jpg";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import health from "../assets/health.svg"
import stethoscope from "../assets/stethoscope.svg"
import injection from "../assets/injection.svg"

function Poster() {
  return (
    <div>
      <Box position={"relative"} h={{ base: "80vh", lg: "90vh" }}>
        <Box
          backgroundImage={`url(${poster})`}
          backgroundSize={"cover"}
          h={"100%"}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgb(255,196,0)"
            opacity={"0.8"}
          ></Box>

          <Flex
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            zIndex="1"
            w={{ base: "100%", lg: "100%" }}
            display={"flex"}
            justifyContent={"space-around"}
            gap={"20px"}
            direction={{base:"column",lg:"row"}}
          >
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
              <Box w={"15%"}>
                <Image src={health} />
              </Box>
              <Box>
                <Text fontSize={{base:"15px",lg:"30px"}} fontWeight={500}>+34567</Text>
              </Box>
              <Box>
                <Text fontSize={{base:"15px",lg:"30px"}} fontWeight={700}>Happy Clients</Text>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
              <Box w={"15%"}>
                <Image  src={stethoscope} />
              </Box>
              <Box>
                <Text fontSize={{base:"15px",lg:"30px"}} fontWeight={500}>+45380</Text>
              </Box>
              <Box>
                <Text fontSize={{base:"15px",lg:"30px"}} fontWeight={700}>Department</Text>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
              <Box w={"15%"}>
                <Image src={injection} />
              </Box>
              <Box>
                <Text fontSize={{base:"15px",lg:"30px"}} fontWeight={500}>+54782</Text>
              </Box>
              <Box>
                <Text fontSize={{base:"15px",lg:"30px"}} fontWeight={700}>Vaccinations</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default Poster;