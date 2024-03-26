import React from 'react';
import dog from "../assets/dogHero.png"
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

function HeroSection() {
  return (
    <div>
        <Box mt={"65px"} bg={"#ffc400"} color={"white"} display={"flex"} alignItems={"center"} justifyContent={"center"} p={"50px"} h={{base:"auto",lg:"95vh"}}>
          <Flex alignItems={"center"} w={{base:"90%",lg:"1250px"}} direction={{base:"column",lg:"row"}}>
            <Box w={{base:"100%",lg:"60%"}} display={"flex"} flexDirection={"column"} gap={"20px"}>
              <Box w={{base:"100%",lg:"80%"}}>
                <Text lineHeight={{base:"30px",lg:"60px"}} fontSize={{base:"30px",lg:"65px"}} fontWeight={600}>First I wanted to be a veterinarian</Text>
              </Box>
              <Box w={{base:"100%",lg:"80%"}}>
                <Text fontSize={{base:"15px",lg:"25px"}} fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
              </Box>
              <Box>
                <Flex gap={"20px"}>
                  <Button bg={"#00bfcb"} color={"white"} p={"25px 30px"}>Contact Us</Button>
                  <Button variant={"outline"} border={"1px solid white"} color={"white"} p={"25px 30px"}>Our Service</Button>
                </Flex>
              </Box>
            </Box>
            <Box w={{base:"100%",lg:"40%"}}>
              <Image src={dog} w={"495px"} h={"100%"} objectFit={"contain"} zIndex={"-1"} filter={"revert"}  />
            </Box>
          </Flex>
        </Box>
    </div>
  )
}

export default HeroSection