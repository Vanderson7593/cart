import {
  BoxShadowProps,
  ColorProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system';

type InputBorderVariant = 'rounded' | 'rectangle'

export interface ButtonProps
  extends ColorProps,
  TextAlignProps,
  BoxShadowProps,
  SpaceProps,
  PositionProps {
  borderRadius?: InputBorderVariant
}
