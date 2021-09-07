import styled from 'styled-components';
import {
  background,
  space,
  layout,
  typography,
  color,
  position,
  PositionProps,
  BackgroundProps,
  flexbox,
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

interface FlexProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    BackgroundProps,
    PositionProps,
    ColorProps {}

export const Flex = styled.div<FlexProps>`
  box-sizing: border-box;
  display: flex;
  ${space};
  ${layout};
  ${typography};
  ${color};
  ${flexbox};
  ${background};
  ${position};
`;

export default Flex;
