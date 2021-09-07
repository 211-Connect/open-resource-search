import Skeleton from 'react-loading-skeleton';
import Text from 'src/components/elements/Text/Text';
import Box from 'src/components/elements/Box/Box';

export default function Description({ hit }) {
  return (
    <Box marginBottom="16px">
      <Text color="textSecondary">
        {!hit && <Skeleton count={5} />}

        {hit && <>{hit.description}</>}
      </Text>
    </Box>
  );
}
