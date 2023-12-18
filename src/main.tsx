import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";

const colors = {
  brand: {
    red: '#fc4a1a',
    orange: '#f7b733',
    700: '#2a69ac',
  },

  styles: {
    global : {
      _hover: {
        bg: '#f7b733',
        color: 'white',
      },
      body: {
        bg: '#f7b733',
        color: 'white',
      },
    },
  }
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
       <App />
    </ChakraProvider>     
 </BrowserRouter>,
)
