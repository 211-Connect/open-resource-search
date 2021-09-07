import styled from 'styled-components';
import { space, SpaceProps, shadow, ShadowProps } from 'styled-system';

import { defaultTheme } from 'src/styles/theme';

interface Props extends SpaceProps, ShadowProps {
  fullWidth?: boolean;
}

export const Select = styled.select<Props>`
  box-sizing: border-box;
  border: none;
  box-shadow: 0 0 8px #d0c9d6;
  border-radius: ${(props) => props.theme.shape.borderRadius};
  padding: 16px;
  display: ${(props) => (props.fullWidth ? 'block' : 'initial')};
  width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
  ${space};
  ${shadow};

  ::placeholder {
    font-size: 0.9375rem;
  }
`;

Select.defaultProps = {
  theme: defaultTheme,
};

export default Select;
