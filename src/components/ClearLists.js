import { useRef } from "react";
import { Button,AlertDialog,AlertDialogBody,AlertDialogFooter,AlertDialogHeader,AlertDialogContent,AlertDialogOverlay} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function ClearLists({setListArray}){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return(
    <>
      <Button colorScheme="red" onClick={onOpen}>Clear Lists</Button>

      <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Clear Lists?
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={()=>{
                  setListArray([]);
                  onClose();
                }} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    </>
  )
}

export default ClearLists;