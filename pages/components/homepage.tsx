import React from "react";
import { Box, Container, Heading, Text, Stack, Image, Flex} from '@chakra-ui/react';
import Navbar from './navbar'

function Homepage (){
    return(
<>
    <Image 
        h="30vh"
        width="100%"
        objectFit="cover"
        src="https://a-static.besthdwallpaper.com/solo-leveling-sung-jin-woo-shadow-monsters-wallpaper-3200x900-88313_74.jpg" alt="sungjinwoo banner"/>

<Container

    maxW="container.md"
    mt="20px"
>
    <Stack
        direction={{base:"column", md:"row"}}
        display={{base:"flex", md:"flex"}}
        width={{base:"flex", md:"auto"}}
        alignItems="center"
        spacing={4}
        minHeight="20vh"
    >
        
        <Box>
            <Text textAlign="center" fontSize="xl">Sung Jinwoo (성진우) is the main protagonist of Solo Leveling. Originally an infamously weak E-Rank Hunter, he got the chance of a lifetime when he was selected as the Player of the System, giving him the unique ability to grow in strength without restraint. As a result, by taking advantage of the opportunities offered to him by the System, Jinwoo eventually rose to power as humanity&apos;s greatest hunter and the second Shadow Monarch.</Text>
        </Box>
    </Stack>

</Container>

</>
    )
}

export default Homepage
