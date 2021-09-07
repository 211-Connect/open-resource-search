import styled from 'styled-components';
import Box from 'src/components/elements/Box/Box';

export const StyledResults = styled(Box)`
  background-color: #f7f5f9;
  width: 100%;
  max-width: 540px;
  position: relative;
  overflow-y: auto;
  height: 100%;

  @media screen and (max-width: 700px) {
    max-width: 100%;
  }

  @media print {
    max-width: 100%;
  }
`;
