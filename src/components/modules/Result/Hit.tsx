import Box from 'src/components/elements/Box/Box';
import Text from 'src/components/elements/Text/Text';
import Flex from 'src/components/elements/Flex/Flex';

import Heading from './Heading/Heading';
import Location from './Location/Location';
import Description from './Description/Description';
import ContactButtons from './ContactButtons/ContactButtons';
import MoreInformation from './MoreInformation/MoreInformation';
import { checkString } from '@util/checkString';
import FavoriteButton from './FavoriteButton/FavoriteButton';

interface ILocation {
  lat?: number;
  lng?: number;
  zoom?: number;
}

interface HitProps {
  hit?: any;
  location?: ILocation;
  score?: any;
  mutate?: any;
}

export default function Hit({ hit, location, score }: HitProps) {
  return (
    <Box
      id={hit?.id}
      margin="16px"
      padding="16px"
      borderBottom="1px solid #dedede"
      backgroundColor="#ffffff"
      borderRadius="6px"
      boxShadow="0 0 8px #D0C9D6"
    >
      <Box marginBottom="16px">
        <Flex>
          <Heading hit={hit} />

          {hit && hit.isFavorite && <FavoriteButton hit={hit} />}
        </Flex>

        <Location hit={hit} location={location} />
      </Box>

      <Description hit={hit} />
      <ContactButtons hit={hit} location={location} />
      <MoreInformation hit={hit} />

      {(process.env.NODE_ENV === 'development' ||
        process.env.NEXT_PUBLIC_DEBUG) != null &&
        checkString(score) && (
          <Flex justifyContent="flex-end" alignItems="center">
            <Text color="textSecondary" variant="body1">
              score: {score}
            </Text>
          </Flex>
        )}
    </Box>
  );
}
