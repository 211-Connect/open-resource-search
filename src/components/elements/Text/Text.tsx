import { HTMLAttributes } from 'react';
import styled, { PalleteColorUnion } from 'styled-components';
import {
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  typography,
  TypographyProps,
} from 'styled-system';

import { defaultTheme } from 'src/styles/theme';
import { VariantUnion } from './variants';

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: VariantUnion;
}

interface StyledTextProps
  extends TextProps,
    SpaceProps,
    TextAlignProps,
    LayoutProps,
    FlexboxProps,
    TypographyProps {
  paragraph?: boolean;
  color?: PalleteColorUnion;
}

function Text({ variant, children, className }: TextProps) {
  switch (variant) {
    case 'h1':
      return <h1 className={className}>{children}</h1>;
    case 'title':
    case 'h2':
      return <h2 className={className}>{children}</h2>;
    case 'subtitle':
    case 'h3':
      return <h3 className={className}>{children}</h3>;
    case 'h4':
      return <h3 className={className}>{children}</h3>;
    case 'srOnly':
      return <span className={className}>{children}</span>;
    case 'body1':
    case 'body2':
    case 'small':
    case 'caption':
    default:
      return <p className={className}>{children}</p>;
  }
}

const StyledText = styled(Text)<StyledTextProps>`
  color: ${(props) =>
    props.style != null && props.style.color != null
      ? props.style.color
      : props.color != null
      ? props.theme.pallete[props.color]
      : props.theme.pallete['textPrimary']};
  margin: ${(props) => (props.paragraph ? '0 0 8px' : 0)};
  ${(props) =>
    props.variant != null
      ? props.theme.typography[props.variant]
      : props.theme.typography['body1']}
  ${space};
  ${layout};
  ${flexbox};
  ${textAlign};
  ${typography};
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

export { StyledText as Text };
export default StyledText;
