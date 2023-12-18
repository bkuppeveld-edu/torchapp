


import React, { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';

const CreateFromTemplateModal = ({chosenMonster}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [monstersApi, setMonstersApi] = useState([]);

    const getMonstersFromFiveEApi = async () => {
        const response = await fetch('https://www.dnd5eapi.co/api/monsters');
        const data = await response.json();
        setMonstersApi(data.results);
    }

    useEffect(() => {
        if(isOpen) {
            getMonstersFromFiveEApi();
        }
    }
    , [isOpen]);

    const handleMonsterClick = (monster) => {
        chosenMonster(monster);
        onClose();
    }
    return (
        <div>
            <Button color="white" bg="brand.red" marginLeft={6} onClick={onOpen}>
                Create new from template
            </Button>
            <Modal isOpen={isOpen} size="sm" onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Choose a template</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {!monstersApi ? null : (
                            <UnorderedList>
                                {monstersApi.map((monster: any) => (
                                    <ListItem onClick={() => handleMonsterClick(monster.url)}  key={monster.index}>{monster.name}</ListItem>
                                ))}
                            </UnorderedList>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CreateFromTemplateModal;