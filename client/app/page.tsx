"use client"
import { Box } from '@chakra-ui/react'
import NavBar from '@components/NavBar'
import Crousel from '@components/Home/Crousel'
import AboutUs from '@components/Home/AboutUs'
import WhyChooseUs from '@components/Home/WhyChooseUs'

export default function Home() {
  return (
    <Box display={"flex"} flexDir={'column'} w={'100vw'} minH={'100svh'} bg={"url(/background.png)"}  >
      <NavBar />
      <Crousel />
      <AboutUs />
      <WhyChooseUs />
    </Box>
  )
}
