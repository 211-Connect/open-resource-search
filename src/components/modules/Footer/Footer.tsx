import Flex from 'src/components/elements/Flex/Flex';
import Text from 'src/components/elements/Text/Text';
import Box from 'src/components/elements/Box/Box';
import Link from 'src/components/elements/Link/Link';
import theme from 'src/constants/theme';
import FeedbackMargin from '../FeedbackButton/FeedbackMargin';
import getTextColorContrast from 'src/utils/getTextColorContrast';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';

export default function SiteFooter() {
  return (
    <Box backgroundColor={theme.PRIMARY_COLOR} padding="16px">
      <Flex
        maxWidth={1200}
        margin="0 auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          variant="small"
          style={{ color: getTextColorContrast(theme.PRIMARY_COLOR) }}
        >
          &copy; 2021, {getAppConfigValue('brandName')}. All rights reserved.
        </Text>
        <Box>
          <Link
            href="/privacy-policy"
            target="_blank"
            style={{ color: getTextColorContrast(theme.PRIMARY_COLOR) }}
          >
            Privacy Policy
          </Link>
        </Box>
      </Flex>
      <FeedbackMargin />
    </Box>
  );
}
