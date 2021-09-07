import styled from 'styled-components';

export const SingleResultContainer = styled.div`
  background-color: #fff;
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
    overflow-y: visible;
  }
`;
