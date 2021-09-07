import styled from 'styled-components';
import Box from 'src/components/elements/Box/Box';

export const Container = styled(Box)`
  background-color: #e55c43;
  margin: 0 auto;
  max-width: 1400px;
  padding: 16px;
`;

export const AlertsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 8px 4px 8px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
