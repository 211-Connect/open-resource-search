import styled from 'styled-components';
import Box from 'src/components/elements/Box/Box';

export const Container = styled(Box)`
  background-color: #fff;
  margin: 0 auto;
  max-width: 1400px;
  padding: 16px 16px 0 16px;
`;

export const CategoriesContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 8px 0 8px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
