import { Container, SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/product";
import { useEffect } from "react";

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();

  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container>
      <VStack>
        <Text>
          Current Products
        </Text>

        <SimpleGrid
          column={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing= {10}
          w = {"full"}
        >

        </SimpleGrid>
        <Text>
          No Products Found {" "}
          <Link to = {"/create"}>
            <Text>
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
};
export default HomePage;


// export const HomePage = () => {
//   return (
//     <div>HomePage</div>
//   )
// }
