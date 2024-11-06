import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Textarea,
  useDisclosure,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { BASE_URL } from "../App";

const CreateUserModal = ({ setUsers }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isLoading, setIsLoading] = useState(false);
	const [inputs, setInputs] = useState({
		name: "",
		role: "",
		description: "",
		gender: "",
	});
	const toast = useToast();
const { colorMode } = useColorMode();
	const handleCreateUser = async (e) => {
		e.preventDefault(); // prevent page refresh
		setIsLoading(true);
		try {
			const res = await fetch(BASE_URL + "/friends", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});

			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error);
			}

			toast({
        status: "success",
        title: "Yayy! 🎉",
        description: "The new notes has benn created successfully.",
        duration: 2000,
        position: "top-center",
      });
			onClose();
			setUsers((prevUsers) => [...prevUsers, data]);

			setInputs({
				name: "",
				role: "",
				description: "",
				gender: "",
			}); // clear inputs
		} catch (error) {
			toast({
				status: "error",
				title: "Missing Field.",
				
				duration: 4000,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
    <>
      <Button onClick={onOpen}>
        <FaPlus size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleCreateUser}>
          <ModalContent bg={colorMode === "light" ? "blue.200" : "blue.500"}>
            <ModalHeader> Add Your Note </ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                {/* Left */}
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    placeholder="Type The Title"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  />
                </FormControl>

                {/* Right */}
                <FormControl>
                  <FormLabel>Sub-Title</FormLabel>
                  <Input
                    placeholder="Type The Sub-Title"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs({ ...inputs, role: e.target.value })
                    }
                  />
                </FormControl>
              </Flex>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflowY={"hidden"}
                  placeholder="Type The Description.."
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs({ ...inputs, description: e.target.value })
                  }
                />
              </FormControl>

              <RadioGroup mt={4}>
                <Flex gap={5}>
                  <Radio
                    value="imp"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    imp
                  </Radio>
                  <Radio
                    value="not imp"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    not imp
                  </Radio>
                </Flex>
              </RadioGroup>
            </ModalBody>

            <ModalFooter justifyContent={"space-between"}>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                isLoading={isLoading}
                width={{ base: "100%", md: "100%" }}
              >
                Add
              </Button>
              <Button width={{ base: "100%", md: "100%" }}  onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default CreateUserModal;
