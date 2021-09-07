import { AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';
import styled, { PalleteColorUnion } from 'styled-components';
import {
  space,
  SpaceProps,
  background,
  BackgroundProps,
  borders,
  BordersProps,
  flexbox,
  layout,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

import { defaultTheme } from 'src/styles/theme';
import { getVariant, Variant } from './variants';

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    SpaceProps,
    BackgroundProps,
    BordersProps,
    LayoutProps,
    FlexboxProps {
  external?: boolean;
  disabled?: boolean;
  variant?: Variant;
  color?: PalleteColorUnion;
}

const StyledAnchor = styled.a<LinkProps>`
  border-radius: ${(props) => props.theme.shape.borderRadius};
  transition: all 0.2s ease-in-out;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'initial')};
  color: ${(props) =>
    props.color != null
      ? props.theme.pallete[props.color]
      : props.theme.pallete['textPrimary']};
  ${(props) => getVariant(props)};
  ${space};
  ${background};
  ${borders};
  ${layout};
  ${flexbox};
`;

StyledAnchor.defaultProps = {
  theme: defaultTheme,
};

function Link({ external, href, children, ...props }: LinkProps) {
  if (external) {
    return (
      <StyledAnchor href={href} {...props}>
        {children}
      </StyledAnchor>
    );
  }

  return (
    <NextLink href={href} passHref>
      <StyledAnchor {...props}>{children}</StyledAnchor>
    </NextLink>
  );
}

export { Link };
export default Link;
