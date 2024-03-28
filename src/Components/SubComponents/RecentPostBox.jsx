import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { GoPlus } from "react-icons/go";

function RecentPostBox({image,title,date,desc}) {
  return (
    <div>
        <Box m={"auto"}
        w={"300px"}>
            <Box>
                <Image src={image} />
            </Box>
            <Box p={"20px 25px"} display={"flex"} flexDirection={"column"} gap={"10px"} borderLeft={"2px solid lightgrey"} borderRight={"2px solid lightgrey"} borderBottom={"2px solid lightgrey"}>
                <Box display={"flex"} flexDirection={"column"} gap={"7px"}>
                    <Text fontSize={"20px"} fontWeight={600} lineHeight={"25px"}>{title}</Text>
                    <Text textTransform={"uppercase"} color={"#00bfcb"} fontSize={"15px"} fontWeight={600}>{date}</Text>
                </Box>
                <Box>
                    <Text fontSize={"13px"} fontWeight={500} lineHeight={"18px"}>{desc}</Text>
                </Box>
                <Flex color={"#00bfcb"} fontWeight={700} fontSize={"15px"} alignItems={"center"}>
                    <Box>
                        <Text>Read More</Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <GoPlus/>
                    </Box>
                </Flex>
            </Box>
        </Box>
    </div>
  )
}

export default RecentPostBox