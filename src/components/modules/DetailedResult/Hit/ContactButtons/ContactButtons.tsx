import { Phone, Language, Navigation } from '@material-ui/icons';
import Link from 'src/components/elements/Link/Link';
import { useAppSelector } from 'src/redux/store';
import theme from 'src/constants/theme';

import { DontPrintContainer } from '../Hit.styles';

export default function ContactButtons({ hit }) {
  const location = useAppSelector((state) => state.location);

  if (!hit) return null;

  return (
    <DontPrintContainer>
      {!hit.phone ?? hit.phone.length === 0 ? null : (
        <Link
          external
          href={`tel:${hit.phone}`}
          variant="outline"
          color="primary"
          marginRight="4px"
          background="#f7f5f9"
          border="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Phone style={{ marginRight: '4px', color: theme.SECONDARY_COLOR }} />{' '}
          Call
        </Link>
      )}

      {!hit.website || hit.website.length === 0 ? null : (
        <Link
          external
          href={hit.website}
          target="_blank"
          rel="noreferrer"
          marginLeft="4px"
          marginRight="4px"
          variant="outline"
          color="primary"
          background="#f7f5f9"
          border="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Language
            style={{ marginRight: '4px', color: theme.SECONDARY_COLOR }}
          />{' '}
          Website
        </Link>
      )}

      {location?.lat == null ||
      location?.lng == null ||
      hit.locationLat == null ||
      hit.locationLon == null ? null : (
        <Link
          external
          href={`https://www.google.com/maps/dir/?api=1&origin=${location?.lat},${location?.lng}&destination=${hit.locationLat},${hit.locationLon}`}
          target="_blank"
          rel="noreferrer"
          color="primary"
          marginLeft="4px"
          variant="outline"
          background="#f7f5f9"
          border="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Navigation
            style={{ marginRight: '4px', color: theme.SECONDARY_COLOR }}
          />
          Directions
        </Link>
      )}
    </DontPrintContainer>
  );
}
