import styled, { keyframes } from 'styled-components';
import { AutorenewOutlined } from '@material-ui/icons';

const SpinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const TransitionSpinner = styled(AutorenewOutlined)`
  animation: ${SpinAnimation} 1.5s linear infinite forwards;
`;

export default TransitionSpinner;
