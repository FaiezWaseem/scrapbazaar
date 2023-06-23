"use client"
import { Box } from '@chakra-ui/react'
import NavBar from '@components/NavBar'
export default function Home() {
  return (
    <Box display={"flex"} w={'100vw'} minH={'100svh'}  >
      <NavBar />
    </Box>
  )
}
