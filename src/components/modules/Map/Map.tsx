import { useState, useMemo } from 'react';
import GoogleMap, { GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import Link from 'src/components/elements/Link/Link';
import Text from 'src/components/elements/Text/Text';
import { useAppSelector } from 'src/redux/store';

import MapStyles from './mapStyles.json';
import CustomMarker from './CustomMarker';
import MapContainer from './MapContainer';
import { getAppConfigValue } from '@util/getAppConfigValue';

function Map({ google }) {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);
  const location = useAppSelector((state) => state.location);
  const results = useAppSelector((state) => state.results.data) as any[];
  const memoizedLocation = useMemo(
    () => ({ lat: location.centerLat, lng: location.centerLng }),
    [location.centerLng, location.centerLng]
  );

  return (
    // @ts-ignore I need to check this later. Not sure how to fix ts errors here
    <GoogleMap
      yesIWantToUseGoogleMapApiInternals
      fullscreenControl={false}
      streetViewControl={false}
      mapTypeControl={false}
      google={google}
      initialCenter={{ lat: location.centerLat, lng: location.centerLng }}
      center={memoizedLocation}
      zoom={location.zoom}
      // @ts-ignore I need to check this later. Not sure how to fix ts errors here
      styles={MapStyles}
      onClick={() => setShowInfoWindow(false)}
    >
      {results?.map((m) => {
        const title = m.locationName || 'Address Unavailable';
        const name = m.title;

        return (
          <CustomMarker
            key={m.id}
            // @ts-ignore
            icon="/pin.svg"
            // @ts-ignore I need to check this later. Not sure how to fix ts errors here
            phone={m.phone}
            website={m.website}
            onClick={(props, marker) => {
              setActiveMarker(marker);
              setShowInfoWindow(true);
              document.getElementById(m.id)?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            title={title}
            name={name}
            optimized={false}
            position={{
              lat: m.locationLat,
              lng: m.locationLon,
            }}
          />
        );
      })}

      <InfoWindow
        marker={activeMarker}
        visible={showInfoWindow}
        // @ts-ignore I need to check this later. Not sure how to fix ts errors here
        onClose={() => setShowInfoWindow(false)}
      >
        <div>
          <Text variant="h3" color="primary" paragraph>
            {activeMarker?.name}
          </Text>

          <Text variant="subtitle" color="primary" paragraph>
            {activeMarker?.title}
          </Text>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            {activeMarker?.phone && (
              <Text marginRight="16px">
                <Link href={`tel:${activeMarker.phone}`} color="primary">
                  {activeMarker.phone}
                </Link>
              </Text>
            )}

            {activeMarker?.website && (
              <Text marginRight="16px">
                <Link
                  href={activeMarker.website}
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </Link>
              </Text>
            )}

            {location.lat && location.lng && (
              <Text>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&origin=${
                    location.lat
                  },${
                    location.lng
                  }&destination=${activeMarker?.position?.lat()},${activeMarker?.position?.lng()}`}
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </Link>
              </Text>
            )}
          </div>
        </div>
      </InfoWindow>
    </GoogleMap>
  );
}

const WrappedMap = GoogleApiWrapper({
  apiKey: getAppConfigValue('services.map.google.apiKey'),
})(Map);

export default function CustomWrappedMap() {
  return (
    <MapContainer>
      <WrappedMap />
    </MapContainer>
  );
}
