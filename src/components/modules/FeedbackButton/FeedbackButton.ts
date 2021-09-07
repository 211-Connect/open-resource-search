import styled from 'styled-components';

import Link from 'src/components/elements/Link/Link';
import { defaultTheme } from 'src/styles/theme';
import getTextColorContrast from 'src/utils/getTextColorContrast';

const FeedbackButton = styled(Link)`
  background: ${(props) => props.theme.pallete.primary};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid ${(props) => props.theme.pallete.primaryMedium};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  color: ${(props) => getTextColorContrast(props.theme.pallete.primary)};
  padding: 8px 24px;
  position: fixed;
  right: 0;
  top: 40%;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: bottom right;
  z-index: 10;

  :hover {
    background: ${(props) => props.theme.pallete.primaryMedium};
    text-decoration: none;
    color: ${(props) =>
      getTextColorContrast(props.theme.pallete.primaryMedium)};
  }

  @media screen and (max-width: 900px) {
    top: initial;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    transform: none;
  }

  @media print {
    display: none;
  }
`;

FeedbackButton.defaultProps = {
  theme: defaultTheme,
};

export default FeedbackButton;
