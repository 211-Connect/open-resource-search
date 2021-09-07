import { checkString } from '@util/checkString';

export const resultFromApi = (result: any) => ({
  id: result.id,
  title: getTitle(result),
  locationName: getLocationName(result),
  locationLat: result.location.latitude,
  locationLon: result.location.longitude,
  description: getDescription(result),
  phone: result.phone[0].number,
  website: getWebsite(result),
  languages: getLanguages(result),
  fees: getFees(result),
  emergencyInfo: getEmergencyInfo(result),
  eligibility: getEligibility(result),
  email: getEmail(result),
  schedule: getSchedule(result),
  applicationProcess: getApplicationProcess(result),
  organizationName: getOrganizationName(result),
  organizationDescription: getOrganizationDescription(result),
});

function getTitle(result) {
  let title = '';

  if (checkString(result.service.name)) {
    title += `${result.service.name} at `;
  }

  if (checkString(result.location.name)) {
    title += result.location.name;
  } else {
    title += result.organization.name;
  }

  return title;
}

function getWebsite(result) {
  if (checkString(result.service.url)) {
    return result.service.url;
  } else if (checkString(result.url)) {
    return result.url;
  }

  return '';
}

function getLocationName(result) {
  if (result.location.physical_address[0]) {
    return `${result.location.physical_address[0].address_1}, ${result.location.physical_address[0].city}, ${result.location.physical_address[0].state_province} ${result.location.physical_address[0].postal_code}`;
  }

  return '';
}

function getDescription(result) {
  if (checkString(result.service.description)) {
    return result.service.description;
  } else if (checkString(result.service.short_description)) {
    return result.service.short_description;
  } else if (checkString(result.description)) {
    return result.description;
  }

  return result.short_description;
}

function getLanguages(result) {
  const language = result?.location?.language ?? result.language;

  if (language && language.length > 0) {
    const formattedLanguages = language
      .filter((el) => el.id === result.id)
      .map((el) => {
        let language;
        try {
          language = JSON.parse(el.language);
        } catch (err) {
          language = '';
        }

        return language;
      })
      .reduce((acc, el) => acc + el, '')
      .split(',')
      .join(', ');

    if (formattedLanguages && formattedLanguages.length > 0) {
      return formattedLanguages;
    }
  }

  return 'No info';
}

function getFees(result) {
  if (checkString(result.service.fees)) {
    return result.service.fees;
  } else if (checkString(result.fees)) {
    return result.fees;
  }

  return 'No info';
}

function getEmergencyInfo(result) {
  if (checkString(result.service.emergency_info)) {
    return result.service.emergency_info;
  } else if (checkString(result.emergency_info)) {
    return result.emergency_info;
  }

  return '';
}

function getEligibility(result) {
  const eligibility = result?.service?.eligibility ?? result?.eligibility ?? [];

  if (eligibility.length > 0) {
    return eligibility.map((el) => el.eligibility).join(' ');
  }

  return 'No info';
}

function getEmail(result) {
  if (checkString(result.service.email)) {
    return result.service.email;
  } else if (checkString(result.email)) {
    return result.email;
  }

  return '';
}

function getSchedule(result) {
  const schedule =
    result?.service?.schedule[0]?.description ??
    result?.schedule[0]?.description;
  return schedule;
}

function getApplicationProcess(result) {
  if (checkString(result.service.application_process)) {
    return result.service.application_process;
  } else if (checkString(result.application_process)) {
    return result.application_process;
  }

  return 'No info';
}

function getOrganizationName(result) {
  if (checkString(result.service.organization.name)) {
    return result.service.organization.name;
  } else if (checkString(result.organization.name)) {
    return result.organization.name;
  }

  return 'Agency name not available';
}

function getOrganizationDescription(result) {
  if (checkString(result.service.organization.description)) {
    return result.service.organization.description;
  } else if (checkString(result.organization.description)) {
    return result.organization.description;
  }

  return 'No info';
}
