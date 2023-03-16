import { IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

const ThemeToggleButton = () =>{
    const { toggleColorMode } = useColorMode()

    return(
        <IconButton
            aria-label="Toggle theme"
            icon={useColorModeValue(<FiMoon/>,<FiSun/>)}
            onClick={toggleColorMode}
            variant="transparent"
        >

        </IconButton>
    )
}

export default ThemeToggleButton;