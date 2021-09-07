import styled from 'styled-components';
import {
  background,
  space,
  layout,
  typography,
  color,
  borders,
  BordersProps,
  BackgroundProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  boxShadow,
  BoxShadowProps,
  position,
  PositionProps,
} from 'styled-system';

interface BoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    BackgroundProps,
    ColorProps,
    BordersProps,
    BoxShadowProps,
    PositionProps {}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${space};
  ${layout};
  ${typography};
  ${color};
  ${background};
  ${borders};
  ${boxShadow};
  ${position}
`;

export default Box;
