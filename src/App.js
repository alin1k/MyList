import List from "./components/List";
import "./App.css"
import { Box, Button, HStack, Heading, SimpleGrid} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [listArray , setListArray] = useState([]);

  return (
    <>
      <HStack mb={4} padding={3} bgColor={"teal.500"} display="flex" justifyContent="space-between">
        <Heading color={"white"}>MyList</Heading>
        <Button colorScheme="red" onClick={()=>setListArray([])}>Clear Lists</Button>
      </HStack>
      
      <SimpleGrid columns={4} padding={4} spacing={4}>
        {listArray}

        <Box display="flex" justifyContent="center" alignItems="center">
            <Button onClick={()=>setListArray([...listArray, <List/>])}>+ Add new list</Button>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
