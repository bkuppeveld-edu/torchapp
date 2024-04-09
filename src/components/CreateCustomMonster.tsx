import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    Box,
    Button,
    Input,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Textarea,
  } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import CreateFromTemplateModal from './CreateMonster/CreateFromTemplateModal'


const CreateCustomMonster = () => {

    const [monsters, setMonsters] = useState([])
    const [createMonster, setCreateMonster] = useState({
      monster_name: '',
      monster_type: '',
      monster_size: '',
      monster_alignment: '',
      monster_armor_class: '',
      monster_hit_points: '',
      monster_hit_dice: '',
      monster_speed: '',
      monster_strength: '',
      monster_dexterity: '',
      monster_constitution: '',
      monster_intelligence: '',
      monster_wisdom: '',
      monster_charisma: '',
      monster_proficiency: '',
      monster_saving_throws: '',
      monster_skills: '',
      monster_damage_vulnerabilities: '',
      monster_damage_resistances: '',
      monster_damage_immunities: '',
      monster_condition_immunities: '',
      monster_senses: '',
      monster_languages: '',
      monster_challenge_rating: '',
      monster_special_abilities: '',
      monster_actions: '',
      monster_legendary_actions: '',
      monster_image: '',
      monster_description: '',
      monster_source: '',
      monster_reactions: ''
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userMonster, setUserMonster] = useState('');
    const [localMonster, setLocalMonster] = useState();

    const handleChosen = (chosenMonster) => {
        setUserMonster(chosenMonster);
        isOpen ? onClose() : onOpen();
        
    }
  

   
   
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCreateMonster(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    
    const postMonsterToApi = async () => {
      console.log(createMonster)
      try {
        const response = await fetch('http://127.0.0.1:3000/api/monsters', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(createMonster)
        })
        const data = await response.json()
        console.log('data send: ' + data)
      } catch (error) {
        console.error('Error sending data:', error)
      }
    }
    const getMonstersFromApi = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/getMonsters')
        const data = await response.json()
        const monsterss = data
        setMonsters(monsterss) // Push data to monsters array
        
      } catch (error) {
        console.error('Error fetching monsters:', error)
      };
    }
  
    const getSpecificeMonsterFromApi = async () => {
          const response = await fetch(`https://www.dnd5eapi.co${userMonster}`);
          const data = await response.json();
          setCreateMonster(data);
          setCreateMonster(createMonster => ({
            ...createMonster,
            monster_image: data.image,
            monster_size: data.size,
            monster_alignment: data.alignment,
            monster_type: data.type,
            monster_armor_class: data.armor_class[0].value,
            monster_hit_points: data.hit_points,
            monster_hit_dice: data.hit_dice,
            monster_speed: data.speed.walk,

            monster_description: data.desc,
            monster_name: data.name,
            monster_strength: data.strength,
            monster_dexterity: data.dexterity,
            monster_constitution: data.constitution,
            monster_intelligence: data.intelligence,
            monster_wisdom: data.wisdom,
            monster_charisma: data.charisma,
            monster_proficiency: data.proficiencies,
            monster_saving_throws: data.proficiencies,
            monster_skills: data.skills,
            monster_damage_vulnerabilities: data.damage_vulnerabilities,
            monster_damage_resistances: data.damage_resistances,
            monster_damage_immunities: data.damage_immunities,
            monster_condition_immunities: data.condition_immunities,
            monster_senses: data.senses,
            monster_languages: data.languages,
            monster_challenge_rating: data.challenge_rating,
            monster_special_abilities: data.special_abilities,
            monster_actions: data.actions,
            monster_legendary_actions: data.legendary_actions,
            monster_source: `https://www.dnd5eapi.co${userMonster}`
          }));
          
    }
    

  
    useEffect(() => {
      if (userMonster) {
        getSpecificeMonsterFromApi();
      }
    }, [userMonster])

    useEffect(() => {
      getMonstersFromApi()
    }, [])

    
  
    return (
    
        <Box display="flex" flexDirection="column" padding={16}  borderRadius={3}>
        <Box flex={1} alignItems="center" display="flex" >
          <Button onClick={onOpen}>Create new monster</Button>
          <CreateFromTemplateModal chosenMonster={handleChosen} />
        </Box>
        <Modal isOpen={isOpen} size='full' onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create a monster</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
          <SimpleGrid columns={4}>
                 
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Monster name:</Text>
                  <Input value={createMonster.monster_name} name="monster_name" placeholder="Monster Name" onChange={handleChange} />
                </Box>
   
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Type:</Text> <Input value={createMonster.monster_type} name="monster_type" placeholder="Type" onChange={handleChange}/>
              </Box>
               
      
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Size:</Text>
                <Input value={createMonster.monster_size} name="monster_size" placeholder="Size" onChange={handleChange}/>
              </Box>
                
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Alignment:</Text>
                <Input value={createMonster.monster_alignment} name="monster_alignment" placeholder="Alignment" onChange={handleChange}/>
              </Box>
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Armor Class:</Text>
                <Input value={createMonster.monster_armor_class} name="monster_armor_class" placeholder="Armor Class" onChange={handleChange}/>

              </Box>
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Hit Points:</Text>
                <Input value={createMonster.monster_hit_points} name="monster_hit_points" placeholder="Hit Points" onChange={handleChange}/>

              </Box>
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Hit Dice:</Text>
                <Input name="monster_hit_dice" value={createMonster.monster_hit_dice} placeholder="Hit Dice" onChange={handleChange}/>
              </Box>
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
              <Text>Speed:</Text>
                <Input name="monster_speed" value={createMonster.monster_speed} placeholder="Speed"onChange={handleChange}/>

            </Box>
            
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Strength:</Text>
                <Input name="monster_strength" value={createMonster.monster_strength} placeholder="Strength" onChange={handleChange}/>
              </Box>
            
           
              <Box display="flex" flexDirection="row"   margin={4}>
                <Text>Dexterity:</Text>
                <Input name="monster_dexterity" placeholder="Dexterity" value={createMonster.monster_dexterity} onChange={handleChange}/>
              </Box>
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Constitution:</Text>
                <Input name="monster_constitution" placeholder="Constitution" value={createMonster.monster_constitution} onChange={handleChange}/>
              </Box>
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
              <Text>Intelligence:</Text>
                <Input name="monster_intelligence" placeholder="Intelligence" value={createMonster.monster_intelligence} onChange={handleChange}/>
            </Box>
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Wisdom:</Text>
                <Input name="monster_wisdom" placeholder="Wisdom" value={createMonster.monster_wisdom} onChange={handleChange}/>
                </Box>

           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Charisma:</Text>
                <Input name="monster_charisma" placeholder="Charisma" value={createMonster.monster_charisma} onChange={handleChange}/>
                </Box>

           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Proficiency:</Text>
                <Textarea
                  name="monster_proficiency"
                  placeholder="Proficiency"
                  value={
                    !createMonster.monster_proficiency ||
                    !Array.isArray(createMonster.monster_proficiency) 
                
                      ? createMonster.monster_proficiency
                      : createMonster.monster_proficiency.map(
                          (item, index) => item.proficiency.name + ' ' + item.value + '\n'
                        )
                  }
                  onChange={handleChange}
                />
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Saving Throws:</Text>
                <Textarea
                  name="monster_proficiency"
                  placeholder="Proficiency"
                  value={
                    !createMonster.monster_saving_throws ||
                    !Array.isArray(createMonster.monster_saving_throws) 
                
                      ? createMonster.monster_saving_throws
                      : createMonster.monster_saving_throws.map(
                          (item, index) => item.proficiency.name + ' ' + item.value + '\n'
                        )
                  }
                  onChange={handleChange}
                />                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Skills:</Text>
                <Input name="monster_skills" value={createMonster.monster_skills} placeholder="Skills"onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Damage Vulnerabilities:</Text>
                <Input name="monster_damage_vulnerabilities" placeholder="Damage Vulnerabilities" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Damage Resistances:</Text>
                <Input name="monster_damage_resistances" placeholder="Damage Resistances" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Damage Immunities:</Text>
                <Input name="monster_damage_immunities" placeholder="Damage Immunities" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Condition Immunities:</Text>
                <Input name="monster_condition_immunities" placeholder="Condition Immunities"onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Senses:</Text>
                <Input name="monster_senses" placeholder="Senses" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Languages:</Text>
                <Input name="monster_languages" placeholder="Languages" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Challenge Rating:</Text>
                <Input name="monster_challenge_rating" placeholder="Challenge Rating" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Monster reactions</Text>
                <Input name="=monster_reactions" placeholder="monster reactions" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Monster description</Text>
                <Input name="monster_description" placeholder="monster description" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>API URL:</Text>
                <Input name="monster_source" placeholder="API URL" onChange={handleChange}/>
                </Box>
          
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Special Abilities:</Text>
                <Input name="monster_special_abilities" placeholder="Special Abilities" onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Actions:</Text>
                <Input name="monster_actions" placeholder="Actions"onChange={handleChange}/>
                </Box>
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Legendary Actions:</Text>
                <Input name="monster_legendary_actions" placeholder="Legendary Actions" onChange={handleChange}/>

              </Box>
            
           
              <Box display="flex" flexDirection="row"  margin={4}>
                <Text>Image:</Text>
        
                <Input name="monster_image" placeholder="Image" onChange={handleChange}/>
                </Box>
    
          <Button appearance="primary" className='bg-tortle' onClick={() => postMonsterToApi()}>Save</Button>
          
        </SimpleGrid>
        
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button>Save</Button>
        </ModalFooter>
        </ModalContent>
        </Modal>
        <Box marginTop={6} display="flex" borderRadius={3} maxW='full' overflow='scroll'>

        <Table variant='striped'  size='md'>
        <Thead>
          <Tr>
          {/*   reference for table: https://evergreen.segment.com/components/table 
                const { monster_name, monster_type, monster_size, monster_alignment, monster_armor_class, monster_hit_points, monster_hit_dice, monster_speed, monster_strength, monster_dexterity, monster_constitution, monster_intelligence, monster_wisdom, monster_charisma, monster_proficiency, monster_saving_throws, monster_skills, monster_damage_vulnerabilities, monster_damage_resistances, monster_damage_immunities, monster_condition_immunities, monster_senses, monster_languages, monster_challenge_rating, monster_special_abilities, monster_actions, monster_legendary_actions, monster_image } = req.body;
   */}
              <Th>Monster name</Th>
              <Th>Type</Th>
              <Th>Size</Th>
              <Th>Alignment</Th>
              <Th>Armor Class</Th>
              <Th>Hit Points</Th>
              <Th>Hit Dice</Th>
              <Th>Speed</Th>
              <Th>Strength</Th>
              <Th>Dexterity</Th>
              <Th>Constitution</Th>
              <Th>Intelligence</Th>
              <Th>Wisdom</Th>
              <Th>Charisma</Th>
              <Th>Proficiency</Th>
              <Th>Saving Throws</Th>
              <Th>Skills</Th>
              <Th>Damage Vulnerabilities</Th>
              <Th>Damage Resistances</Th>
              <Th>Damage Immunities</Th>
              <Th>Condition Immunities</Th>
              <Th>Senses</Th>
              <Th>Languages</Th>
              <Th>Challenge Rating</Th>
              <Th>Special Abilities</Th>
              <Th>Actions</Th>
              <Th>Legendary Actions</Th>
              <Th>Image</Th>
              </Tr>
        </Thead> 
     
        <Tbody>
       
        {!monsters ? 'loading...' : monsters.map((item, index) => {
          return(
          <Tr key={index}>
            <Td>{item.monster_name}</Td>
            <Td>{item.monster_type}</Td>
            <Td>{item.monster_size}</Td>
            <Td>{item.monster_alignment}</Td>
            <Td>{item.monster_armor_class}</Td>
            <Td>{item.monster_hit_points}</Td>
            <Td>{item.monster_hit_dice}</Td>
            <Td>{item.monster_speed}</Td>
            <Td>{item.monster_strength}</Td>
            <Td>{item.monster_dexterity}</Td>
            <Td>{item.monster_constitution}</Td>
            <Td>{item.monster_intelligence}</Td>
            <Td>{item.monster_wisdom}</Td>
            <Td>{item.monster_charisma}</Td>
            <Td>{item.monster_proficiency}</Td>
            <Td>{item.monster_saving_throws}</Td>
            <Td>{item.monster_skills}</Td>
            <Td>{item.monster_damage_vulnerabilities}</Td>
            <Td>{item.monster_damage_resistances}</Td>
            <Td>{item.monster_damage_immunities}</Td>
            <Td>{item.monster_condition_immunities}</Td>
            <Td>{item.monster_senses}</Td>
            <Td>{item.monster_languages}</Td>
            <Td>{item.monster_challenge_rating}</Td>
            <Td>{item.monster_special_abilities}</Td>
            <Td>{item.monster_actions}</Td>
            <Td>{item.monster_legendary_actions}</Td>
            <Td>{item.monster_image}</Td>
          </Tr>
          )
        })}
        </Tbody>
        </Table>
      </Box>
        </Box>
    )
  }

export default CreateCustomMonster;

