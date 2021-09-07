import { useRef } from 'react';
import { getDistance } from 'geolib';
import Skeleton from 'react-loading-skeleton';
import { Room } from '@material-ui/icons';
import Text from 'src/components/elements/Text/Text';
import theme from 'src/constants/theme';

export default function Location({ hit, location }) {
  const distance = useRef(
    location?.lat != null &&
      location?.lng != null &&
      hit?.location_latitude != null &&
      hit?.location_longitude != null
      ? getDistance(
          {
            latitude: location.lat,
            longitude: location.lng,
          },
          {
            latitude: hit.location_latitude,
            longitude: hit.location_longitude,
          }
        ) / 1609.344
      : null
  );

  return (
    <Text
      variant="subtitle"
      color="primary"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      {!hit ? (
        <Skeleton />
      ) : (
        <>
          {hit.locationName && (
            <>
              <Room
                style={{ marginRight: '4px', color: theme.SECONDARY_COLOR }}
              />
              {hit.locationName}
              <span style={{ color: '#666', marginLeft: 4 }}>
                {distance.current != null && (
                  <> - {distance.current.toFixed(1)} miles</>
                )}
              </span>
            </>
          )}
        </>
      )}
    </Text>
  );
}
