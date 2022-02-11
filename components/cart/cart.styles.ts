import { Flex, View } from "@elements";
import styled from "@emotion/styled";

export const Container = styled(Flex)`

flex-direction: column;
min-width: 500px;
flex:1;
background-color: #FFF;
border-radius: 10px;

@media screen and (max-width: 600px) {
  min-width: 100vw;
}

hr{
  width:100%;
  border: 1px solid ${(({ theme }) => theme.colors.GREY)};
}
`
export const Alert = styled(View)`
background-color: ${({ theme }) => theme.colors.GREEN}; 
border-radius:20px;
margin:0px auto;

h2{
  padding:12px;
  color: ${({ theme }) => theme.colors.GREEN_DARK};
}
`

export const Products = styled(Flex)`
padding:10px 20px;
gap:10px;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

export const Total = styled(Flex)`
width:100%;
padding:0 20px;
justify-content: space-between;
align-items: center;
`

export const Footer = styled(Flex)`
width:100%;
padding:20px;
justify-content: space-between;
align-items: center;
`