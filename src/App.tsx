import { useState } from 'react'
import {Flex, Menu, MenuButton, MenuList, MenuItem, Button, Image, Box, Text} from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import logo from './torchlogo.png';
import { Link, Routes, Route } from 'react-router-dom';

// @ts-ignore
import Dashboard from './components/Dashboard';

import CreateCustomMonster from './components/CreateCustomMonster';

const App = () => {


  return (
    <SimpleGrid columns={1}>
      <Box>
      <Flex padding={4} boxShadow='xs'rounded='md' margin={4} justify='space-between' align='center'>
        <Menu>
          <Flex flexDirection='row' align='center'>
            <Image boxSize='50px' objectFit='contain' src={logo} alt="Torch" marginRight={4}/>
            <Text fontSize='2xl' fontWeight='bold' color='brand.red'>TORCH</Text>
          </Flex> {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
  
            <MenuButton color="white" bg='brand.red' as={Button} rightIcon={<ChevronDownIcon />}>
            
            </MenuButton>
          <MenuList>
          <MenuItem><Link to='/dashboard'>Dashboard</Link></MenuItem>
            <MenuItem><Link to='/createcustommonster'>Create a custom monster</Link></MenuItem>
            <MenuItem>Party</MenuItem>
            <MenuItem>Encounter</MenuItem>
            <MenuItem>Combat</MenuItem>
          </MenuList>
        </Menu>
    </Flex >
      </Box>
     
      <Button as={Box} background='brand.orange'>
        <p>Create a new combat</p>
     </Button>
     <Routes>
        <Route path="/" element={<Dashboard />} index />
        <Route path="/createcustommonster" element={<CreateCustomMonster />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </SimpleGrid>
  )
}

export default App
