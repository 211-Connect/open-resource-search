import styled, { PalleteColorUnion } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { defaultTheme } from 'src/styles/theme';
import getTextColorContrast from 'src/utils/getTextColorContrast';

interface IButtonProps extends SpaceProps {
  color?: PalleteColorUnion;
  noPrint?: boolean;
  noShadows?: boolean;
  fullWidth?: boolean;
}

export const Button = styled.button<IButtonProps>`
  align-items: center;
  background-color: ${(props) => props.theme.pallete[props.color]};
  border-radius: ${(props) => props.theme.shape.borderRadius};
  box-shadow: ${(props) => (props.noShadows ? 'none' : '0 0 8px #d0c9d6')};
  color: ${(props) => getTextColorContrast(props.theme.pallete[props.color])};
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 0.9375rem;
  padding: 8px 16px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
  ${space};

  &:hover {
    background-color: ${(props) => props.theme.pallete[props.color + 'Medium']};
    color: ${(props) =>
      getTextColorContrast(props.theme.pallete[props.color + 'Medium'])};
  }

  ${(props) =>
    props.noPrint &&
    `
        @media print {
            display: none;
        }
    `}
`;

Button.defaultProps = {
  theme: defaultTheme,
  color: 'primary',
};

export default Button;
