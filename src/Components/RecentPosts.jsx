import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function RecentPosts() {
  return (
    <div>
        <Box>
            <Box>
                <Text>Recent Posts</Text>
            </Box>
            <Box>
                <Text fontSize={{base:"15px",lg:"25px"}} fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
            </Box>
            <Flex>
                
            </Flex>
        </Box>
    </div>
  )
}

export default RecentPosts