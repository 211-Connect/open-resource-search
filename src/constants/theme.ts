import { getAppConfigValue } from 'src/utils/getAppConfigValue';

const THEME_CONSTANTS = {
  BASE_FONT_SIZE: getAppConfigValue('theme.baseFontSize'),
  PRIMARY_COLOR: getAppConfigValue('theme.primaryColor'),
  PRIMARY_MEDIUM_COLOR: getAppConfigValue('theme.primaryMediumColor'),
  PRIMARY_LIGHT_COLOR: getAppConfigValue('theme.primaryLightColor'),
  SECONDARY_COLOR: getAppConfigValue('theme.secondaryColor'),
  SECONDARY_MEDIUM_COLOR: getAppConfigValue('theme.secondaryMediumColor'),
  SECONDARY_LIGHT_COLOR: getAppConfigValue('theme.secondaryLightColor'),
  ERROR_COLOR: getAppConfigValue('theme.errorColor'),
  SUCCESS_COLOR: getAppConfigValue('theme.successColor'),
  BORDER_RADIUS: getAppConfigValue('theme.borderRadius'),
  FEEDBACK_URL: getAppConfigValue('feedbackUrl'),
};

export default THEME_CONSTANTS;
