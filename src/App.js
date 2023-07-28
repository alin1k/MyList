import List from "./components/List";
import ClearLists from "./components/ClearLists";
import "./App.css"
import { Box, Button, HStack, Heading, SimpleGrid} from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [listArray , setListArray] = useState([]);

  async function deleteList(id){
    setListArray(prevList => prevList.filter((list)=> list.key !== id))
  }

  return (
    <>
      <HStack mb={4} padding={3} bgColor={"teal.300"} display="flex" justifyContent="space-between">
        <Heading color={"white"}>MyList</Heading>
        <ClearLists setListArray={setListArray}/>
      </HStack>
      
      <SimpleGrid columns={4} padding={4} spacing={4}>
        {listArray}

        <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              colorScheme="teal"
              onClick={()=>{
                const id = uuidv4();
                setListArray(prevList => [...prevList, <List key={id} onDelete={()=>deleteList(id)}/>])
              }}
            >
              + Add new list
            </Button>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
