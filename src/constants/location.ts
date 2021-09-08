import { getAppConfigValue } from 'src/utils/getAppConfigValue';

const LOCATION_CONSTANTS = {
  CENTER_LAT: getAppConfigValue('services.map.center.lat'),
  CENTER_LON: getAppConfigValue('services.map.center.lon'),
};

export default LOCATION_CONSTANTS;
