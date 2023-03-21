import React from 'react';
import { Box, Image, Container,Heading,Stack,Text} from '@chakra-ui/react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};



const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container maxW={'container.x1'} minH={'100vh'} p='16'>

          <Heading textTransform={"uppercase"} py='2' w={'fit-content'} borderBottom={'2px solid'} m='auto'>Services</Heading>

          <Stack h={'full'} alignItems='center' direction={['column', 'row']} >
            
            <Image src={img5} h
              ={['40', '400']} filter={'hue-rotate(-130deg)'} />
            
            <Text p={['4','16']} lineHeight={'190%'} letterSpacing='widest' textAlign={'center'}>
              Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Exercitationem modi ipsam vel voluptas accusantium perferendis consequatur autem quis voluptatibus soluta ut, molestias tenetur consectetur obcaecati quam perspiciatis nesciunt expedita quo iure libero! Aperiam ea culpa eos vel recusandae reiciendis, voluptates, cumque quae fugit sunt odit, laboriosam ullam quam autem ut!
            </Text>

          </Stack>

        </Container>
      </Box>
    </>
  );
};




const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h="100vh">
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>

    <Box w="full" h="100vh">
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future is gaming
      </Heading>
    </Box>

    <Box w="full" h="100vh">
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h="100vh">
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future is gaming
      </Heading>
    </Box>

  </Carousel>
);

export default Home;
