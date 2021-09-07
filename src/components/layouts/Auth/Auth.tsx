import Flex from 'src/components/elements/Flex/Flex';
import Header from 'src/components/modules/Header/Header';

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => (
  <Flex minHeight="100vh" flexDirection="column">
    <Header />
    <Flex
      role="main"
      flex={1}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {children}
    </Flex>
  </Flex>
);

export default Auth;
