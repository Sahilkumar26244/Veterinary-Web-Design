import React from 'react';
import { AspectRatio, Box, Button, Flex, Text } from "@chakra-ui/react";

function VideoSection() {
  return (
    <div>
      <Box p={"50px"} h={{base:"auto",lg:"95vh"}} display={"flex"} justifyContent={"center"}>
        <Flex justifyContent={"space-between"} w={{base:"90%",lg:"1250px"}} m={"auto"} position="relative" direction={{base:"column",lg:"row"}} gap={"50px"}>
          <Box w={{base:"100%",lg:"50%"}} display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={"20px"}>
            <Box w={{base:"100%",lg:"80%"}}>
              <Text lineHeight={{base:"30px",lg:"50px"}} fontSize={{base:"30px",lg:"45px"}} fontWeight={700}>As a veterinarian and lover of animals</Text>
            </Box>
            <Box w={{base:"100%",lg:"80%"}}>
              <Text fontSize={{base:"15px",lg:"25px"}} fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
            </Box>
            <Box>
              <Button bg={"#ffc400"} color={"white"} p={"25px 30px"}>Our Service</Button>
            </Box>
          </Box>
          <Box w={{base:"100%",lg:"50%"}} display={"flex"} justifyContent={"center"} alignItems={"center"} position="relative">
            {/* Centered container for the video */}
            <Box position={{base:"",lg:"absolute"}} top={0} left={0} zIndex={"1"}>
              <video
                controls
                width={"100%"}
                src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
                poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
                alt='Big Buck Bunny'
                objectFit='contain'
                sx={{
                  aspectRatio: '16/9'
                }}
              />
            </Box>
            <Box h={"150px"} w={"300px"} bg={"#ffc400"} position={"absolute"} top={"190px"} left={"-30"} display={{base:"none",lg:"flex"}}>
            
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default VideoSection;
