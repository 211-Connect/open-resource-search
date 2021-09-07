import styled from 'styled-components';
import { Autocomplete } from '@material-ui/lab';
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
import { FormControl } from '@material-ui/core';

interface AutocompleteProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    BackgroundProps,
    PositionProps,
    ColorProps {}

export const StyledAutocomplete = styled(Autocomplete)<AutocompleteProps>`
  ${space};
  ${layout};
  ${typography};
  ${color};
  ${flexbox};
  ${background};
  ${position};
`;

export const StyledFormControl = styled(FormControl)<AutocompleteProps>`
  ${space};
  ${layout};
  ${typography};
  ${color};
  ${flexbox};
  ${background};
  ${position};
`;
