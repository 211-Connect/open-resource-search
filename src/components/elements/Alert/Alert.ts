import styled, { PalleteColorUnion } from 'styled-components';

import { defaultTheme } from 'src/styles/theme';
import Box from 'src/components/elements/Box/Box';
import getTextColorContrast from 'src/utils/getTextColorContrast';

interface Props {
  color: PalleteColorUnion;
}

export const Alert = styled(Box)<Props>`
  background-color: ${(props) => props.theme.pallete[props.color]};
  border-radius: ${(props) => props.theme.shape.borderRadius};
  padding: 8px;
  color: ${(props) => getTextColorContrast(props.theme.pallete[props.color])};
`;

Alert.defaultProps = {
  theme: defaultTheme,
  color: 'primary',
};

export default Alert;
