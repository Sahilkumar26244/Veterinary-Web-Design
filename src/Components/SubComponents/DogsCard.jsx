import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

function DogsCard() {
  return (
    <div>
      <Box
        m={"auto"}
        w={"90%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"15px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"90%"}>
          <Image
            w={"100%"}
            h={"100%"}
            objectFit={"contain"}
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box display={"flex"} justifyContent={"space-around"} w={"70%"}>
          <Text
            textAlign={"justify"}
            fontSize={{ base: "20px", lg: "25px" }}
            fontWeight={700}
          >
            <s>$40</s>
          </Text>
          <Text
            textAlign={"justify"}
            fontSize={{ base: "20px", lg: "25px" }}
            fontWeight={700}
          >
            $50
          </Text>
        </Box>
        <Box>
          <Button
            borderRadius={"20px"}
            p={"15px 40px"}
            bg={"#00bfcb"}
            color={"white"}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default DogsCard;
