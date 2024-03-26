import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import DogsCard from './SubComponents/DogsCard'

function DogCategories() {
  return (
    <div>
        <Box p={"50px"} bg={"#ffc400"} color={"white"} h={{base:"auto",lg:"100vh"}} display={"flex"} justifyContent={"center"}>
            <Box w={{base:"90%",lg:"1250px"}} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Box>
                    <Text textAlign={"center"} fontSize={{base:"30px",lg:"65px"}} fontWeight={600}>Title Here</Text>
                </Box>
                <Box w={{base:"100%",lg:"50%"}} m={"auto"}>
                    <Text fontSize={{base:"13px",lg:"25px"}} fontWeight={500} textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
                </Box>
                <Flex gap={"50px"} mt={"40px"} direction={{base:"column",lg:"row"}}>
                    <DogsCard image={""} price={""} strickedPrice={""} />
                    <DogsCard image={""} price={""} strickedPrice={""} />
                    <DogsCard image={""} price={""} strickedPrice={""} />
                </Flex>
            </Box>
        </Box>
    </div>
  )
}

export default DogCategories