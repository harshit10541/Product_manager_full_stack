import { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { useProductStore } from "../../store/product";


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  
  
  const {createProduct} = useProductStore()

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);
    createProduct(newProduct)
  }
  return <Container>
    <Stack>
      <Heading>
        Create New Product 
      </Heading>
      <Box>
        <VStack>
          <Input 
            placeholder="Product Name"
            name = "name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
          />
          <Input 
            placeholder="Price"
            name = "price"
            type = "number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
          />
          <Input 
            placeholder="Image URL"
            name = "image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
          />
          <Button onClick={handleAddProduct}>
            Add Product
          </Button>
        </VStack>
      </Box>
    </Stack>
  </Container>
};

export default CreatePage;