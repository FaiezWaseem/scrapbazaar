"use client"
import { Box } from '@chakra-ui/react'
import NavBar from '@components/NavBar'
import Crousel from '@components/Crousel'
export default function Home() {
  return (
    <Box display={"flex"} flexDir={'column'} w={'100vw'} minH={'100svh'} bg={"url(/background.png)"}  >
      <NavBar />
      <Crousel />
    </Box>
  )
}
