import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import RecentPostBox from './SubComponents/RecentPostBox'

function RecentPosts() {
  return (
    <div>
        <Box p={"70px"} h={{base:"auto",lg:""}} display={"flex"} justifyContent={"center"}>
            <Box w={{base:"90%",lg:"1250px"}} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"} alignItems={"center"}>
                <Box>
                    <Text textAlign={"center"} fontSize={{base:"25px",lg:"60px"}} fontWeight={700}>Recent Posts</Text>
                </Box>
                <Box w={{base:"100%",lg:"50%"}} m={"auto"}>
                    <Text fontSize={{base:"10px",lg:"25px"}} fontWeight={500} textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
                </Box>
                <Flex gap={"50px"} mt={"40px"} direction={{base:"column",lg:"row"}}>
                    <RecentPostBox image={"https://www.echucavets.com.au/wp-content/uploads/2019/01/cat_claw_clip.jpg"} title={"As a veterinarian and lover of animals"} date={"FEBRUARY 09, 2020"} desc={"Lorem ipsum available, but in the majo rity have suffered atleration in some words which look."} />
                    <RecentPostBox image={"https://www.echucavets.com.au/wp-content/uploads/2019/01/westie_pup_clip.jpg"} title={"As a veterinarian and lover of animals"} date={"FEBRUARY 09, 2020"} desc={"Lorem ipsum available, but in the majo rity have suffered atleration in some words which look."} />
                    <RecentPostBox image={"https://www.echucavets.com.au/wp-content/uploads/2019/01/happy_wet_dog.jpg"} title={"As a veterinarian and lover of animals"} date={"FEBRUARY 09, 2020"} desc={"Lorem ipsum available, but in the majo rity have suffered atleration in some words which look."} />
                </Flex>
            </Box>
        </Box>
    </div>
  )
}

export default RecentPosts