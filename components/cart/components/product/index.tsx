import { Flex, Heading, Text } from "@elements";
import Image from "next/image";
import { FC } from "react";
import { Container, ImageWrapper } from "./product.styles";
import { ProductProps } from "./product.types";

const Product: FC<ProductProps> = ({ imageUrl, name, price, sellingPrice }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={imageUrl}
          width="80"
          height="80"
          alt={`${imageUrl}-image`}
        />
      </ImageWrapper>
      <Flex className="details">
        <Heading as="h2">{name}</Heading>
        <Text>{`R$ ${sellingPrice}`}</Text>
        <Heading as="h2">{`R$ ${price}`}</Heading>
      </Flex>
    </Container>
  );
};
export default Product;
