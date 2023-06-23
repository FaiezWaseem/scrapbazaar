'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
const colors = {
  app : {
    light :  {
      main : "#56ad38",
      white : "#fff",
      black : "#18212e",
      grey1 : "#858997",
      grey2 : "#777",
      grey3 : "rgba(0,0,0,0.5)",
    },
    dark :  {

    },
  }
}

export const theme = extendTheme({ colors })


export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}