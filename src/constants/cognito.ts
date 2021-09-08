import { getAppConfigValue } from 'src/utils/getAppConfigValue';

const COGNITO_CONSTANTS = {
  REGION: getAppConfigValue('services.auth.cognito.region'),
  USER_POOL_ID: getAppConfigValue('services.auth.cognito.userPoolId'),
  CLIENT_ID: getAppConfigValue('services.auth.cognito.clientId'),
};

export default COGNITO_CONSTANTS;
