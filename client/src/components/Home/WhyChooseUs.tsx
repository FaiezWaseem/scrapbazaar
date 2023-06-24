import { HStack, Stack, Heading, Text , color } from "@chakra-ui/react";

import Image from "next/image";
import {AiOutlineArrowRight} from "react-icons/ai"


export default () => {

    return (<Stack justify={'center'} w={'full'} bg={'#f8f9fb'}>
        <Heading textAlign={'center'} >Why Choose ScrapBazar?</Heading>
        <HStack justify={'center'} flexWrap={'wrap'} >
            <Card
                title={'Save Environment'}
                desc={'Recycling conserves resources, saves energy, helps protect the environment for us as we are working towards save Environment'}
                image={'/save_environment.jpg'}
            />
            <Card
                title={'Save Environment'}
                desc={'Recycling conserves resources, saves energy, helps protect the environment for us as we are working towards save Environment'}
                image={'/save_environment.jpg'}
            />
            <Card
                title={'Save Environment'}
                desc={'Recycling conserves resources, saves energy, helps protect the environment for us as we are working towards save Environment'}
                image={'/save_environment.jpg'}
            />
            <Card
                title={'Save Environment'}
                desc={'Recycling conserves resources, saves energy, helps protect the environment for us as we are working towards save Environment'}
                image={'/save_environment.jpg'}
            />
        </HStack>
    </Stack>)
}

type Card = {
    title: string;
    desc: string;
    image: string;
}
const Card = ({ title, desc, image }: Card) => {
    return <Stack m={2} pt={6} pl={4} pr={4} pb={4} bg={'app.light.white'} shadow={'lg'} w={['100%', '33%', '20%']} justify={'center'} alignItems={'center'}  >
        <Image src={image} alt={title} width={200} height={150} />
        <Text p={2} fontSize={'xl'} color='app.light.main' >{title}</Text>
        <Text p={2} textAlign={'justify'} >{desc}</Text>
        <HStack 
        style={{
            transition : 'all 0.5s'
        }}
        _hover={{
            cursor:'pointer',
            transform : 'translateX(10px)',
        }}
        justify={'flex-start'}
        >
            <Text p={2}  color='app.light.main' >Learn More  </Text>
            <AiOutlineArrowRight color={'#56ad38'} />
        </HStack>
    </Stack>
}