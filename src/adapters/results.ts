import { checkString } from '@util/checkString';

export const resultsFromApi = (results: any[]) =>
  results.map((result) => ({
    id: result._source.id,
    title: getTitle(result._source),
    locationName: getLocationName(result._source),
    locationLat: result._source.location_latitude,
    locationLon: result._source.location_longitude,
    description: getDescription(result._source),
    phone: result._source.phone,
    website: result._source.website,
    _score: result._score,
  }));

function getTitle(result) {
  let title = '';

  if (checkString(result.service_name)) {
    title += `${result.service_name} at `;
  }

  if (checkString(result.location_name)) {
    title += result.location_name;
  } else {
    title += result.organization_name;
  }

  return title;
}

function getLocationName(result) {
  if (checkString(result.physical_address)) {
    return `${result.physical_address}, ${result.physical_address_city}, ${result.physical_address_state} ${result.physical_address_postal_code}`;
  }
}

function getDescription(result) {
  if (checkString(result.service_short_description)) {
    return result.service_short_description;
  }

  return result.service_description;
}
