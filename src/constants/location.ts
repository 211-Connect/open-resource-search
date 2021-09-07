import { getAppConfigValue } from 'src/utils/getAppConfigValue';

const LOCATION_CONSTANTS = {
  CENTER_LAT: getAppConfigValue('mapCenter.lat'),
  CENTER_LON: getAppConfigValue('mapCenter.lon'),
};

export default LOCATION_CONSTANTS;
