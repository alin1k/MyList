import { useState } from "react";
import AddItem from "./AddItem";
import { 
  Stack, 
  Checkbox, 
  Card, 
  CardBody, 
  CardHeader, 
  Editable, 
  EditableInput, 
  EditablePreview, 
  Divider, 
  Box,
  HStack, 
  Text, 
  IconButton, 
} from "@chakra-ui/react";
import { DeleteIcon, CloseIcon } from "@chakra-ui/icons";

function List({onDelete}){
  const [itemsArray, setItemsArray] = useState([]);
  const [editableValue, setEditableValue] = useState("Edit list name");

  return(
    <Card borderRadius="xl">
      <IconButton 
        size="xs" colorScheme="red" borderRadius="xl"
        position="absolute" top={1} right={1} 
        icon={<CloseIcon/>}
        onClick={onDelete}
      />

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
        <Stack mb={4} spacing={1} direction="column">
          {itemsArray.length ? <></> : <Text>List is empty! Add some items</Text>}
          {itemsArray.map((val, index)=> (
            <Box key={index}>
              <HStack justify="space-between">
                <Checkbox colorScheme="teal" key={index}>{val}</Checkbox>
                <IconButton icon={<DeleteIcon/>} mb={1} size="sm" colorScheme="red" borderRadius="xl" variant="ghost" onClick={()=>{
                  const newArray = [...itemsArray];
                  newArray.splice(index, 1);
                  setItemsArray(newArray);
                }}/>
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