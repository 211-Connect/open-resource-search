import { getAppConfigValue } from 'src/utils/getAppConfigValue';

const COGNITO_CONSTANTS = {
  REGION: getAppConfigValue('aws.cognito.region'),
  USER_POOL_ID: getAppConfigValue('aws.cognito.userPoolId'),
  CLIENT_ID: getAppConfigValue('aws.cognito.clientId'),
};

export default COGNITO_CONSTANTS;
