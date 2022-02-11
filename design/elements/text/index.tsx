import { fontSizes, PALETTE } from "@theme";
import styled from "@emotion/styled";
import {
  color,
  compose,
  textAlign,
  textShadow,
  typography,
} from "styled-system";

export const Text = styled("p")(
  {
    fontSize: fontSizes.ExtraSmall,
    color: PALETTE.GREY_DARK,
    fontWeight: "500",
  },
  compose(color, textAlign, textShadow, typography)
);

export default Text;
