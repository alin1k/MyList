import { useState } from "react";
import AddItem from "./AddItem";
import { Stack, Checkbox, Card, CardBody, CardHeader, Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

function List(){
  const [itemsArray, setItemsArray] = useState([]);

  return(
    <Card>
      <CardHeader pb={1}>
        <Editable fontSize='xl' defaultValue='Click here to edit list name'>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </CardHeader>

      <CardBody display="flex" flexDirection="column" justifyContent="space-between">
        <Stack mb={4} spacing={[1]} direction={["column"]}>
          {itemsArray.map((val, index)=> (
            <Checkbox key={index}>{val}</Checkbox>
          ))}
        </Stack>

        <AddItem itemsArray={itemsArray} setItemsArray={setItemsArray}/>
      </CardBody>

    </Card>
  )
}

export default List;