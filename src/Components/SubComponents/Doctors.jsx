import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Doctors({image,name,desc}) {
  return (
    <div>
        <Box  m={"auto"} w={"90%"} display={"flex"} flexDirection={"column"} gap={"10px"} justifyContent={"center"} alignItems={"center"}>
            <Box w={"90%"}>
                <Image boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} w={"100%"} h={"100%"} objectFit={"contain"} src={image} />
            </Box>
            <Box>
                <Text textAlign={"justify"} fontSize={{base:"20px",lg:"25px"}} fontWeight={700}>{name}</Text>
            </Box>
            <Box>
                <Text textAlign={"center"} fontSize={{base:"10px",lg:"15px"}} fontWeight={500}>{desc}</Text>
            </Box>
        </Box>
    </div>
  )
}

export default Doctors