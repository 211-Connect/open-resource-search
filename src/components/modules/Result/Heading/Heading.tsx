import Skeleton from 'react-loading-skeleton';
import Text from 'src/components/elements/Text/Text';
import Link from 'src/components/elements/Link/Link';

export default function Heading({ hit }) {
  return (
    <Text variant="title" paragraph>
      <Link color="primary" href={`/search/${hit?.id ?? ''}`}>
        {!hit && <Skeleton />}
        {hit && hit.title}
      </Link>
    </Text>
  );
}
