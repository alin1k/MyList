import { useState } from "react";
import { Input, Button, Stack } from "@chakra-ui/react";

function AddItem({itemsArray, setItemsArray}){
    const [inputValue, setInputValue] = useState("");

    return(
        <>
            <Stack spacing={[2]} direction={["row"]}>
                <Input 
                    size='sm'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />  
                
                <Button 
                    size="sm" 
                    colorScheme='teal' variant='solid'
                    onClick={()=>{
                        if(inputValue !== ""){
                            setItemsArray([...itemsArray, inputValue]);
                            setInputValue("")
                        }
                    }}
                >
                    Add item
                </Button>
            </Stack>
        </>
    )
}

export default AddItem;