import styled from 'styled-components';
import { space, SpaceProps, shadow, ShadowProps } from 'styled-system';

import { defaultTheme } from 'src/styles/theme';

interface InputProps extends SpaceProps, ShadowProps {
  fullWidth?: boolean;
}

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  border: none;
  box-shadow: 0 0 8px #d0c9d6;
  border-radius: ${(props) => props.theme.shape.borderRadius};
  padding: 16px;
  -webkit-appearance: none;
  display: ${(props) => (props.fullWidth ? 'block' : 'initial')};
  width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
  ${space};
  ${shadow};

  ::placeholder {
    font-size: 0.9375rem;
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

export default Input;
