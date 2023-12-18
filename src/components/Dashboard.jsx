import { useState } from 'react'
import {Flex,
  Image,
  Box,
  Card,
} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


const Dashboard = () => {

    return (
        <Box>
        <SimpleGrid margin={4} spacing={4} columns={4}>
         <Box>
           <Card>
               <h1>Monster manua2l</h1>
           </Card>
         </Box>
         <Box>
           <Card>
               <h1>Party</h1>
           </Card>
         </Box>
         <Box>
           <Card>
               <h1>Encounter</h1>
           </Card>
         </Box>
         <Box>
           <Card>
               <h1>Combat</h1>
           </Card>
         </Box>
       </SimpleGrid>
        </Box>

    )
}
export default Dashboard