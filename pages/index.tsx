import React from "react";
import Navbar from "./components/navbar";
import { Box, Container, Heading, Text, VStack, Image} from '@chakra-ui/react';
import Homepage from './components/homepage';
import { Link } from "@chakra-ui/react";
import About from './about'
import Ability from './ability'
import Section from './components/section'
function App (){
    return(
<>
            <Navbar/>
            <Homepage/>
            <About/>
            <Ability/>

       
        
        
</>
)
}
export default App;


