import Skeleton from 'react-loading-skeleton';
import Text from 'src/components/elements/Text/Text';

export default function Heading({ hit }) {
  return (
    <Text variant="h2" color="primary">
      {!hit && <Skeleton />}

      {hit && hit.title}
    </Text>
  );
}
