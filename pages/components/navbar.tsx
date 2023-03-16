import { Text, Container, Box, Button, ButtonGroup, Flex, Heading, Icon, Spacer, IconButton, Menu, MenuButton, MenuList, MenuItem, Stack, HStack, useColorModeValue} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/logo'
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import { HamburgerIcon } from '@chakra-ui/icons'
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import ThemeToggleButton from './theme-toggle-button'

const Navbar =()=>{
    return(
<>
<Container
    display="flex"
    p={2}
    maxW="container.lg"
    wrap="wrap"
    align="center"
    justify="space-between"
    
>
    <Flex align="center" mr={5} >
        <Heading as="h1" size="md" letterSpacing={'tighter'} >
            <Logo/>
        </Heading>
    </Flex>

   <Stack
    direction={{base: 'row', md:'row'}}
    display={{base: 'none', md:'flex'}}
    width={{base: 'full', md:'auto'}}
    alignItems='center'
    flexGrow={1}
    mt={{base: 4, nmd:0}}
   >
    <Link href="#about" shallow passHref>
        <Button size="md" variant="navbar">
            About
        </Button>
    </Link>
    <Link href="#ability" shallow passHref>
        <Button size="md" variant="navbar">
            Ability
        </Button>
    </Link>
   </Stack>

   
   <Box flex={1} align="right">
   <ThemeToggleButton/>
        <Box mr={2} display={{base:'inline-block', md:'none'}}>
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options"/>
                <MenuList>
                    <Link href="#about" shallow passHref>
                    <MenuItem>
                        About
                    </MenuItem>
                    </Link>
                    <Link href="#ability" shallow passHref>
                    <MenuItem>
                        Ability
                    </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Box>
    </Container>

</>
    );
}


export default Navbar





