import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme'
import { motion } from 'framer-motion'

function App({ Component, pageProps }: AppProps) {
  return(
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
    >
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </motion.div>
  )
}

export default App
