import styled from 'styled-components';
import {
  space,
  textAlign,
  size,
  SpaceProps,
  TextAlignProps,
  SizeProps,
} from 'styled-system';

import { defaultTheme } from 'src/styles/theme';

interface LabelProps extends SpaceProps, TextAlignProps, SizeProps {}

export const Label = styled.label<LabelProps>`
  color: ${(props) =>
    props.color != null
      ? props.theme.pallete[props.color]
      : props.theme.pallete['textPrimary']};
  ${space};
  ${textAlign};
  ${size};
`;

Label.defaultProps = {
  theme: defaultTheme,
};

export default Label;
