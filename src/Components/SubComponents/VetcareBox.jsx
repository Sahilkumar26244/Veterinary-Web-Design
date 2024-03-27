import { Box, Circle, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { IoLogoInstagram, IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function VetcareBox({image,name,pos}) {
  return (
    <div>
        <Box m={"auto"}
        w={"350px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
        justifyContent={"center"}
        alignItems={"center"}>
            <Box w={"100%"} h={"350px"}>
                <Image boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;"} w={"100%"} h={"100%"} objectFit={"cover"} src={image} />
            </Box>
            <Box>
                <Box>
                    <Text textAlign={"center"} fontSize={"20px"} fontWeight={700} >{name}</Text>
                </Box>
                <Box>
                    <Text textAlign={"center"} textTransform={"uppercase"} fontSize={"16px"} fontWeight={400}>{pos}</Text>
                </Box>
            </Box>
            <Box>
                <Flex gap={{base:"10px",lg:"20px"}} >
                    <Circle size={"30px"} bg={"#ffc400"} color={"white"} cursor={"pointer"}>
                        <IoLogoInstagram/>
                    </Circle>
                    <Circle size={"30px"} bg={"#ffc400"} color={"white"} cursor={"pointer"}>
                        <FaFacebookF/>
                    </Circle>
                    <Circle size={"30px"} bg={"#ffc400"} color={"white"} cursor={"pointer"}>
                        <FaTwitter/>
                    </Circle>
                    <Circle size={"30px"} bg={"#ffc400"} color={"white"} cursor={"pointer"}>
                        <FaWhatsapp/>
                    </Circle>
                </Flex>
            </Box>
        </Box>
    </div>
  )
}

export default VetcareBox