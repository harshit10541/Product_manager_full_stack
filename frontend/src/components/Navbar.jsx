import { Container, Flex, Text} from "@chakra-ui/react"
// import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { LuPlusSquare } from "react-icons/lu";
import { Stack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { MdModeNight } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { useProductStore } from "../../store/product";

export const Navbar = () => {
	const {colorMode, toggleColorMode} = useColorMode();
	const {products} = useProductStore()
  return (
    <Container maxW = {"1440px"} px = {4} > 
	
		
        <Flex
        h = {16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base: "column",
            sm:"row"
        }}
        >
           <Text textAlign={"center"}>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>
                <Stack direction = "row" spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<LuPlusSquare fontSize={20} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <MdModeNight /> : <LuSun size='20' />}
					</Button>
				</Stack>

        </Flex>
    </Container>


);
  
};
// export default Navbar;