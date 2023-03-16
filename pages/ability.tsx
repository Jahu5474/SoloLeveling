import React from 'react';
import Navbar from './components/navbar'
import { Image, VStack, Stack, Container, Box, Text, Heading } from '@chakra-ui/react'
function About() {
    return (
    <>	
<Box
  ml="5%"
>

  <Heading 
    fontSize="2xl"
    id="ability"
    >
    <Text>Ability</Text>
  </Heading>

</Box>

      <Container
        maxW="container.sm"
        m="auto"
        display="flex"
        flexWrap="wrap"
        minH="60vh"
      >
        
        
      <Stack
      direction={{base:"column", md:"column"}}
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
              display="flex"
              boxSize="sm"
              border="1px solid black"
              borderRadius="lg"
              src="https://i.redd.it/h52zdnrr55w71.png" alt="sung jinwoo"/>
          </Box>
          <Box
            
          >
            <Text fontSize="lg" id='ability'>
                As the vessel of the Shadow Monarch, Jinwoo is the strongest hunter in the world and one of the most powerful individuals in existence.
            </Text>
            <br/>
            <Text fontSize="lg" id='ability'>
            <b>Immense Strength:</b> As the second Shadow Monarch, Jinwoo possesses tremendous physical strength. Even before obtaining his true power, he was strong enough to punch a large hole through the Statue of God&apos;s face and beat Thomas Andre, one of the five National Level Hunters, to the brink of death while still holding back. Upon being revived by Ashborn and receiving the full extent of the former&apos;s power, Jinwoo&apos;s strength was buffed to the point that he was able to effortlessly repel the Frost Monarch&apos;s attacks with one hand, kill the Beast Monarch in four hits, and fight on even footing with Antares, the most powerful of the nine Monarchs.
            </Text>
            <br/>
            <Text fontSize="lg" >
              <b>Immense Durability:</b> Jinwoo is incredibly resilient to physical damage. He was virtually unharmed when the Ant King punched him in the face, only sustaining a small cut on his lip, and was able to keep fighting back at full strength even after suffering severe wounds in his battle with the Architect.
            </Text>
            <br/>
            <Text fontSize="lg">
              <b>Immense Speed:</b> Jinwoo is incredibly fast and can move at speeds so great that most opponents are unable to track his movements. He was agile enough to keep up with the Frost Monarch&apos;s attacks during their confrontation and upon obtaining his true power, was able to strike at the Beast Monarch with such speed that the latter didn't even realize that he&apos;d been attacked until one of legs went flying off.
            </Text>
          </Box>
          </Stack>
      </Container>
    </>
      );
    }
    export  default About;