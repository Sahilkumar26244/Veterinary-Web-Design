import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { IoLogoInstagram, IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
// import dog from "../assets/dog.png"

function Footer() {
  return (
    <div>
      <Box
        bg={"#303130"}
        color={"white"}
        display={"flex"}
        alignItems={"center"}
      >
        <Flex direction={{base:"column",lg:"row"}} pt={"50px"} pb={"50px"} w={{base:"90%",lg:"1250px"}} m={"auto"} gap={{base:"50px",lg:"100px"}}>
          <Flex direction={{base:"column",lg:"row"}} w={{base:"100%",lg:"50%"}}  gap={"20px"} justifyContent={"space-between"} >
            <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
              <Text fontSize={{base:"20px",lg:"30px"}} fontWeight={600}>
                About
              </Text>
              <Box
                fontSize={{base:"10px",lg:"18px"}}
                fontWeight={400}
                display={"flex"}
                flexDirection={"column"}
                gap={"5px"}
              >
                <Text>History</Text>
                <Text>Our Team</Text>
                <Text>Brand Guidelines</Text>
                <Text>Terms & Condition</Text>
                <Text>Privacy Policy</Text>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
              <Text fontSize={{base:"20px",lg:"30px"}} fontWeight={600}>
                Services
              </Text>
              <Box
              fontSize={{base:"10px",lg:"18px"}}
                fontWeight={400}
                display={"flex"}
                flexDirection={"column"}
                gap={"5px"}
              >
                <Text>How to Order</Text>
                <Text>Our Products</Text>
                <Text>Order Status</Text>
                <Text>Promo</Text>
                <Text>Payment Method</Text>
              </Box>
            </Box>
          </Flex>



          <Box w={{base:"100%",lg:"50%"}} display={"flex"} flexDirection={"column"} gap={"30px"}>
            <Box>
              <Text fontSize={{base:"20px",lg:"30px"}} fontWeight={600} textAlign={"end"}>Title Here</Text>
              <Text fontSize={{base:"10px",lg:"20px"}} textAlign={"end"}
              fontWeight={400}>Leorem suhgy lkadiao saiuien, but have some issue</Text>
            </Box>
            <Box>
              <Flex bg={"#ffc400"} h={"50px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} justifyContent={"space-between"}>
                <Box
                  w={"80%"}
                  display={"flex"}
                  alignItems={"center"}
                  p={"10px"}
                  color={"white"}
                >
                  <Input 
                    variant={"unstyled"}
                    placeholder="Search"
                    _placeholder={{ color: "white" }}
                  />
                </Box>
                <Box
                  w={"10%"}
                  bg={"#00bfcb"}
                  color={"white"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <GrSend />
                </Box>
              </Flex>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Flex gap={"10px"} color={"#303130"}> 
                <Box borderRadius={"50%"} bg={"white"} w={10} h={10} display={"flex"} alignItems={"center"} justifyContent={"center"}><IoLogoInstagram style={{fontSize:"30px"}} /></Box>
                <Box borderRadius={"50%"} bg={"white"} w={10} h={10} display={"flex"} alignItems={"center"} justifyContent={"center"}><FaFacebookF style={{fontSize:"28px"}}/></Box>
                <Box borderRadius={"50%"} bg={"white"} w={10} h={10} display={"flex"} alignItems={"center"} justifyContent={"center"}><FaTwitter style={{fontSize:"30px"}}/></Box>
                <Box borderRadius={"50%"} bg={"white"} w={10} h={10} display={"flex"} alignItems={"center"} justifyContent={"center"}><FaWhatsapp style={{fontSize:"30px"}}/></Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Footer;
