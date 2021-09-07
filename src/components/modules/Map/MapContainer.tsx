import styled from 'styled-components';

import Flex from 'src/components/elements/Flex/Flex';

const MapContainer = styled(Flex)`
  flex: 1;
  position: relative;

  @media screen and (max-width: 700px) {
    display: none;
  }

  @media print {
    display: none;
  }
`;

export default MapContainer;
