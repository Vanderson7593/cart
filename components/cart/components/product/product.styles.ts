import { Flex } from "@elements";
import styled from "@emotion/styled";

export const Container = styled(Flex)`
justify-content: center;
align-items: center;
gap: 20px;

.details{
  flex-direction: column;
  align-text: left;
}

`

export const ImageWrapper = styled(Flex)`
border: 1px solid ${({ theme }) => theme.colors.GREY}
height:80px;
width:80px;
border: 1px solid ${({ theme }) => theme.colors.GREY};
padding:15px;
`