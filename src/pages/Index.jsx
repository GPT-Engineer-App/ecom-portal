import { Container, Box, Image, Text, VStack, HStack, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a great product.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTYyOTU3MjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another great product.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTYyOTU3MjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This product is also great.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTYyOTU3MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
    <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
    <VStack spacing={2} mt={4} align="start">
      <Heading size="md">{product.name}</Heading>
      <Text>{product.description}</Text>
      <Text fontWeight="bold">{product.price}</Text>
      <HStack spacing={4}>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
          Add to Cart
        </Button>
        <IconButton aria-label="Add to Wishlist" icon={<FaHeart />} colorScheme="pink" />
      </HStack>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={8} textAlign="center">
        Our Products
      </Heading>
      <VStack spacing={8}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
