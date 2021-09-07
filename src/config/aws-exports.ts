import { Auth } from 'aws-amplify';
import constants from 'src/constants/cognito';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';

const awsExports = {
  Auth: {
    region: constants.REGION,
    userPoolId: constants.USER_POOL_ID,
    userPoolWebClientId: constants.CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'favorites',
        endpoint: `${getAppConfigValue('apiUrl')}/api/v1/favorite`,
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getAccessToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
  ssr: true,
};

export default awsExports;
