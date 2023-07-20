import { useState } from "react";
import AddItem from "./AddItem";
import { Stack, Checkbox, Card, CardBody, CardHeader, Editable, EditableInput, EditablePreview, Divider, Box, Button, HStack, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function List(){
  const [itemsArray, setItemsArray] = useState(["item1", "item2", "item3"]);
  const [editableValue, setEditableValue] = useState("Edit list name");

  return(
    <Card>
      <CardHeader pb={1}>
        <Editable 
          fontSize='xl'
          startWithEditView={true} 
          value={editableValue}
          onChange={(value)=>{ setEditableValue(value) }} 
          onSubmit={(value)=>{
            if(value === ""){
              setEditableValue("Field cannot be empty!")
            }
          }}
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
      </CardHeader>

      <CardBody display="flex" flexDirection="column" justifyContent="space-between">
        <Stack mb={4} spacing={[1]} direction={["column"]}>
          {itemsArray.length ? <></> : <Text>List is empty! Add some items</Text>}
          {itemsArray.map((val, index)=> (
            <Box>
              <HStack justify="space-between">
                <Checkbox colorScheme="teal" key={index}>{val}</Checkbox>
                <Button mb={1} size="sm" colorScheme="red" variant="ghost" onClick={()=>{
                  const newArray = [...itemsArray];
                  newArray.splice(index, 1);
                  setItemsArray(newArray);
                }}><DeleteIcon/></Button>
              </HStack>
              <Divider/>
            </Box>
          ))}
        </Stack>

        <AddItem itemsArray={itemsArray} setItemsArray={setItemsArray}/>
      </CardBody>

    </Card>
  )
}

export default List;