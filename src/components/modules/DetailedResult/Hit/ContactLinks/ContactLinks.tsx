import Link from 'src/components/elements/Link/Link';
import Text from 'src/components/elements/Text/Text';
import Box from 'src/components/elements/Box/Box';
import Flex from 'src/components/elements/Flex/Flex';

export default function ContactLinks({ hit }) {
  if (!hit) return null;

  return (
    <Box marginBottom="16px">
      {hit.website && (
        <Flex alignItems="flex-start">
          <Text color="primary" marginRight="4px">
            Website:
          </Text>
          <Link
            href={hit.website}
            rel="noreferrer"
            target="_blank"
            color="primary"
          >
            {hit.website}
          </Link>
        </Flex>
      )}

      {hit.email && (
        <Flex alignItems="flex-start">
          <Text color="primary" marginRight="4px">
            Email:
          </Text>
          <Link
            color="primary"
            href={`mailto:${hit.email}?subject=${hit.title}`}
          >
            {hit.email}
          </Link>
        </Flex>
      )}

      {hit.phone && (
        <Flex alignItems="flex-start">
          <Text color="primary" marginRight="4px">
            Phone:
          </Text>
          <Link href={`tel:${hit.phone}`} color="primary">
            {hit.phone}
          </Link>
        </Flex>
      )}

      {hit.schedule && (
        <Flex alignItems="flex-start">
          <Text color="primary" marginRight="4px">
            Hours:
          </Text>
          <Text color="primary" fontWeight={300}>
            {hit.schedule}
          </Text>
        </Flex>
      )}
    </Box>
  );
}
