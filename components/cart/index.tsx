import { Button, Flex, Heading, View } from "@elements";
import Product from "./components/product";
import { FC } from "react";
import { Alert, Container, Footer, Products, Total } from "./cart.styles";
import { CartProps } from "./cart.types";

const Cart: FC<CartProps> = ({ response }) => (
  <Container>
    <View textAlign="center" py="10px">
      <Heading as="h1">Meu carrinho</Heading>
    </View>
    <hr />
    <Products>
      {response.items.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Products>
    <hr />
    <Flex flexDirection="column" style={{ gap: 10 }} my="22px">
      <Total>
        <Heading>Total</Heading>
        <Heading>{`R$ ${response.totalizers[0].value}`}</Heading>
      </Total>
      {response.totalizers[0].value > 1000 && (
        <Alert>
          <Heading as="h2">Parabéns, sua compra tem frete grátis!</Heading>
        </Alert>
      )}
    </Flex>
    <hr />
    <Footer>
      <Button>Finalizar compra</Button>
    </Footer>
  </Container>
);

export default Cart;
