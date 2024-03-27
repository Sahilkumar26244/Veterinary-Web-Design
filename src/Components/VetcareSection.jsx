import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import VetcareBox from './SubComponents/VetcareBox'

function VetcareSection() {
  return (
    <div>
        <Box p={"70px"} h={{base:"auto",lg:""}} display={"flex"} justifyContent={"center"}>
            <Box w={{base:"90%",lg:"1250px"}} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"} alignItems={"center"}>
                <Box>
                    <Text textAlign={"center"} fontSize={{base:"25px",lg:"60px"}} fontWeight={700}>The vetcare team</Text>
                </Box>
                <Box w={{base:"100%",lg:"50%"}} m={"auto"}>
                    <Text fontSize={{base:"10px",lg:"25px"}} fontWeight={500} textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
                </Box>
                <Flex  gap={"50px"} mt={"40px"} direction={{base:"column",lg:"row"}} >
                    <VetcareBox image={"https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"} name={"Jenifer Mullen"} pos={"veterinary"} />
                    <VetcareBox image={"https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8dUlBZ1RaWndaVnd8fGVufDB8fHx8fA%3D%3D"} name={"Sheeren Collins"} pos={"administration"} />
                    <VetcareBox image={"https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"} name={"Jenifer Mullen"} pos={"veterinary"} />
                </Flex>
            </Box>
        </Box>
    </div>
  )
}

export default VetcareSection