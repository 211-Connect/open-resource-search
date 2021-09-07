import { checkString } from '@util/checkString';

export const favoritesFromApi = (favorites: any[]) =>
  favorites.map((favorite) => ({
    id: getId(favorite),
    title: getTitle(favorite),
    locationName: getLocationName(favorite),
    locationLat: favorite.service_at_location.location.latitude,
    locationLon: favorite.service_at_location.location.longitude,
    description: getDescription(favorite),
    phone: getPhone(favorite),
    website: getWebsite(favorite),
    isFavorite: true,
  }));

function getId(favorite) {
  if (checkString(favorite.service_at_location.id)) {
    return favorite.service_at_location.id;
  } else if (checkString(favorite.service.id)) {
    return favorite.service.id;
  }

  return '';
}

function getTitle(favorite) {
  let title = '';
  const serviceName =
    favorite?.service_at_location?.service.name ?? favorite.service.name;
  const locationName =
    favorite?.service_at_location?.location.name ??
    favorite.service.organization.name;

  if (checkString(serviceName)) {
    title += `${serviceName} at `;
  }

  if (checkString(locationName)) {
    title += locationName;
  }

  return title;
}

function getLocationName(favorite) {
  if (favorite.service_at_location.location.physical_address[0]) {
    return `${favorite.service_at_location.location.physical_address[0].address_1}, ${favorite.service_at_location.location.physical_address[0].city}, ${favorite.service_at_location.location.physical_address[0].state_province} ${favorite.service_at_location.location.physical_address[0].postal_code}`;
  }

  return '';
}

function getDescription(favorite) {
  if (checkString(favorite.service_at_location.service.short_description)) {
    return favorite.service_at_location.service.short_description;
  }

  return favorite.service.short_description;
}

function getPhone(favorite) {
  if (checkString(favorite.service_at_location.phone[0]?.number)) {
    return favorite.service_at_location.phone[0].number;
  }

  return favorite.service.phone[0].number;
}

function getWebsite(favorite) {
  if (checkString(favorite.service_at_location.service.url)) {
    return favorite.service_at_location.service.url;
  }

  return favorite.service.url;
}
