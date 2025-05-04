import { Avatar, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function TopBar() {
  return (
    <HStack color={"black"} bg={"white"} px={"12px"} py={"8px"} minH={"40px"} w={"100%"} justifyContent={"space-between"}>
      <Text>TopBar</Text>
      <Avatar.Root>

      </Avatar.Root>
    </HStack>
  )
}
