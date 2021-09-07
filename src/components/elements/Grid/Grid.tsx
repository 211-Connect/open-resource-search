import React from 'react';
import styled from 'styled-components';
import {
  background,
  space,
  layout,
  typography,
  color,
  grid,
  BackgroundProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  GridProps,
} from 'styled-system';

interface IGridProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    BackgroundProps,
    ColorProps,
    GridProps {
  children: React.ReactNode;
}

export const Grid = styled.div<IGridProps>`
  display: grid;
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${background}
  ${grid}
`;

export default Grid;
