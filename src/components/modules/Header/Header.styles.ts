import styled from 'styled-components';
import Link from 'src/components/elements/Link/Link';
import { defaultTheme } from 'src/styles/theme';

export const SignUpButton = styled(Link)`
  padding: 8px 16px;
  margin-right: 16px;
`;

export const StyledHeader = styled.header`
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;

  @media screen and (max-width: 575px) {
    flex-direction: column;
  }

  @media print {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  height: 50px;
  width: auto;

  @media screen and (max-width: 575px) {
    margin-right: 0;
    padding: 0;
  }
`;

export const StyledLink = styled.a`
  border-bottom: 2px solid transparent;
  color: ${(props) => props.theme.pallete.primary};
  font-size: 14px;
  font-family: Open Sans, sans-serif;
  transition: 0.2s all;
  margin-right: 28px;

  @media screen and (max-width: 575px) {
    margin-right: 0;
  }
`;
StyledLink.defaultProps = {
  theme: defaultTheme,
};

export const HiddenOnMobile = styled.div`
  align-items: center;
  display: flex;
  @media screen and (max-width: 575px) {
    display: none;
  }
`;

export const VisibleOnMobile = styled.div`
  display: none;
  @media screen and (max-width: 575px) {
    display: block;
  }
`;
