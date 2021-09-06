import React from 'react'
import '../styles/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import theme from '@chakra-ui/theme';

function MyApp({ Component, pageProps }) {
  return <ChakraProvider >
    <CSSReset />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
