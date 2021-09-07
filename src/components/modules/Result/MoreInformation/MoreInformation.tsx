import Box from 'src/components/elements/Box/Box';
import Link from 'src/components/elements/Link/Link';

export default function MoreInformation({ hit }) {
  if (!hit) return null;

  return (
    <Box textAlign="center">
      <Link href={`/search/${hit?.id ?? ''}`} variant="normal" color="primary">
        More Information
      </Link>
    </Box>
  );
}
