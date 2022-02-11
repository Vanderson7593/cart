import styled from "@emotion/styled";
import { theme } from "@theme";
import {
  boxShadow,
  color,
  compose,
  position,
  space,
  textAlign,
  variant,
} from "styled-system";
import ButtonStyles from "./button-styles";

import { ButtonProps } from "./button.types";

const Button = styled("button")<ButtonProps>(
  {
    padding: "25px",
    fontSize: "15pt",
    fontWeight: "bold",
    backgroundColor: "#3B74F2",
    color: theme.colors.WHITE,
    width: "100%",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "60px",
  },
  compose(
    color,
    textAlign,
    boxShadow,
    space,
    position,
    variant({
      prop: "borderRadius",
      variants: {
        bordered: ButtonStyles.bordered,
        rectangle: ButtonStyles.rectangle,
      },
    })
  )
);

export default Button;
