import React from 'react';
import {
    Box,
    Button,
    useBreakpointValue,
    Stack,
    Heading,
    HStack,
    Text,
} from '@chakra-ui/react';


export default () => {
    return (<HStack flexWrap={'wrap'} justify={'center'} 
    minH={['300px', '400px', '450px']} bg={"#f8f9fb"} 
    mb={8} w={"100%"}
    id={"aboutus"}
    mt={8}
    pt={8}
    pl={1}
    >
        <Stack w={useBreakpointValue({ base: '100%', lg: '40%' })} >
            <Text fontSize={24} color={'app.light.main'} >About Us</Text>
            <Heading fontSize={'5xl'} >Welcome To Scrap Bazar</Heading>
            <Text fontSize={'lg'} color={'app.light.grey1'} lineHeight={1.6} >{"Scrapbazar is Ahmedabad's First online Kabadiwala. You just request for scrap pickup by call/WhatsApp/Website and our Pickup Executive will come at your doorstep without any extra charge and give best price of your scrap."}.</Text>
            <Text fontSize={'lg'} mt={2} color={'app.light.grey1'} lineHeight={1.6} >{"As scrap dealers we buy recyclable scrap materials such as old washing machine, bike scrap, electronic scrap, old newspaper, schoolbooks, Iron, aluminium, Copper, Brass, Steel, carton scrap, Plastic, computer, e-waste, old batteries etc. We give minimum scrap pickup in all over Ahmedabad. We invite you to join our hands and try to help us in recycling management"}.</Text>
            <Button
              mt={8}
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'app.light.main'}
              href={'#'}
              _hover={{
                bg: 'teal',
              }}
              borderRadius={28}
              maxW={250}
              >
              REQUEST FOR PICKUP
            </Button>
        </Stack>
        <Box w={useBreakpointValue({ base: '100%', lg: '40%' })} justifyContent={'center'} alignItems={'center'} >
            <iframe width={useBreakpointValue({ base: '98%', md: "80%", lg: "516px" })} height="315" src="https://www.youtube.com/embed/-nqucV-i2P4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </Box>
    </HStack>)
}