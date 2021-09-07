import Flex from 'src/components/elements/Flex/Flex';
import Header from 'src/components/modules/Header/Header';

type Props = {
  children: React.ReactNode;
};

const Search = ({ children }: Props) => (
  <Flex flexDirection="column" height="100vh" overflow="hidden">
    <Header />

    <Flex flex={1} position="relative" overflow="hidden" role="main">
      {children}
    </Flex>
  </Flex>
);

export default Search;
