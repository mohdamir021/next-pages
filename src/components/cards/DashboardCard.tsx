import { Box } from '@chakra-ui/react'
import React from 'react'

export default function DashboardCard(props: {
  label?: string
  children?: React.ReactNode;
}) {
  const {label = "Bux", children} = props;

  return (
    <Box p={3} h={"250px"} w={"360px"} bg={"var(--main)"} borderRadius={"12px"} position={"relative"}>
      {children}
      <Box p={2} color={"white"} position={"absolute"} right={3} bottom={3} fontWeight={600} fontSize={"20px"}>
        {label}
      </Box>
    </Box>
  )
}
