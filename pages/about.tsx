import React from 'react';
import Navbar from './components/navbar'
import { Image, VStack, Stack, Container, Box, Text, Heading, SlideFade } from '@chakra-ui/react'
import { motion } from 'framer-motion'
function About() {
    return (
    <>	
<Box
  ml="5%"
>

  <Heading 
    as="h3"
    id="about"
    variant="section-title"
    >
    <Text>About</Text>
  </Heading>



</Box>

      <Container
        maxW="container.md"
        m="auto"
        display="flex"
        flexWrap="wrap"
        minH="40vh"
        centerContent
      >
        
      
      <Stack
      direction={{base:"column", md:"row"}}
      display={{base:"flex", md:"flex"}}
      width={{base:"flex", md:"auto"}}
      alignItems="center"
      flexGrow={1}
      spacing={5}
      >
        <Box
            mt="4"
        >
            <Image 
              border="1px solid blacks"
              borderRadius="lg"
              src="https://i.pinimg.com/736x/04/28/0b/04280b5a1af00f2df0bc038b88dcc543.jpg" alt="Sung Jinwoo"/>
          </Box>
          <Box>
            <Text fontSize="lg" id='about'>
              Sung Jinwoo (성진우) is the main protagonist of Solo Leveling. Originally an infamously weak E-Rank Hunter, he got the chance of a lifetime when he was selected as the Player of the System, giving him the unique ability to grow in strength without restraint. As a result, by taking advantage of the opportunities offered to him by the System, Jinwoo eventually rose to power as humanity&apos;s greatest hunter and the second Shadow Monarch.
            </Text>
          </Box>
          </Stack>
      </Container>
    
    </>
      );
    }
    export  default About;