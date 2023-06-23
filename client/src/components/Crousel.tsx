import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    HStack,
    Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Image from 'next/image';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '10%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: "Ahmedabad's 1st Online kabadiwala",
            text:
                "Download APP Now",
            image:
                '/hero_image1.png',
            titleColor: "app.light.black",
            textColor: "app.light.main",
            appIcons: ["/apple.png", "/play.png"],
        },
        {
            appIcons: ["/apple.png", "/play.png"],
            title: "Ahmedabad's 1st Online kabadiwala",
            text:
                "How to sell my Scrap?",
            image:
                '/hero_image2.png',
            titleColor: "app.light.black",
            textColor: "app.light.main"
        },
        {
            appIcons: ["/apple.png", "/play.png"],
            title: 'Now Sell Your Scrap in 3 Easy Steps',
            text:
                "Book Scrap , Pickup",
            image:
                '/hero_image4.png',
            titleColor: "app.light.black",
            textColor: "app.light.main"
        },
        {
            appIcons: ["/apple.png", "/play.png"],
            title: 'Out Team will arive at your door step',
            text:
                "",
            image:
                '/hero_image3.png',
            titleColor: "app.light.black",
            textColor: "app.light.main"
        },
        {
            appIcons: ["/apple.png", "/play.png"],
            title: 'Quick Payment By Cash/UPI',
            text:
                "",
            image:
                '/hero_image5.png',
            titleColor: "app.light.black",
            textColor: "app.light.main"
        },
    ];

    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                    >
                        {/* This is the block you need to change, to customize the caption */}
                        <Box display={'flex'} w={'100%'} height="600px"
                            justifyContent={'center'}
                            alignItems={'center'}
                            flexDirection={['column' , 'column' , 'row']}
                        >
                            <Stack
                                spacing={0}
                                w={'100%'}
                                maxW={'lg'}
                                p={useBreakpointValue({ base : 8 , lg : 0})}

                            >
                                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} color={card?.titleColor ? card?.titleColor : "app.light.main"} >
                                    {card?.title}
                                </Heading>
                                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} color={card?.textColor ? card?.textColor : "GrayText"} >
                                    {card?.text}
                                </Heading>
                                <HStack>
                                    <Image src={card?.appIcons?.[1]} width={useBreakpointValue({ base : 120 , lg : 150})} height={120} alt={card?.appIcons?.[1]} />
                                    <Image src={card?.appIcons?.[0]} width={useBreakpointValue({ base : 120 , lg : 150})} height={120} alt={card?.appIcons?.[0]} />
                                </HStack>
                            </Stack>
                            <Image src={card?.image} width={useBreakpointValue({ base : 200 , md : 400 , lg : 450  })} height={useBreakpointValue({ base : 300 , md : 450 , lg : 550})} alt={card?.title} />
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}