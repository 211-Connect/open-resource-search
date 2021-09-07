import Head from 'next/head';
import Box from 'src/components/elements/Box/Box';
import Link from 'src/components/elements/Link/Link';
import Text from 'src/components/elements/Text/Text';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';

function PrivacyPolicy() {
  return (
    <Box>
      <Head>
        <title>{getAppConfigValue('brandName')} | Privacy Policy</title>
        <meta
          name="description"
          content={getAppConfigValue('meta.description')}
        />
      </Head>

      <Box maxWidth={960} margin="8px auto" background="#fff" padding="16px">
        <Text variant="h1" color="textSecondary" paragraph>
          Privacy Policy
        </Text>

        <Text color="textSecondary" paragraph>
          This web app collects certain information from users of the app. All
          data collected is completely anonymous, unless you expressly give us
          permission to store it (as in the case of registering for an account).
        </Text>

        <Text variant="title" color="textSecondary" paragraph marginTop="16px">
          What data we collect
        </Text>
        <Text color="textSecondary" paragraph>
          We collect anonymized browsing data such as keywords being searched
          for, and which resource get viewed the most.
        </Text>
        <Text color="textSecondary" paragraph>
          We do <strong>not</strong> connect this data to personally
          identifiable information. It&apos;s collected and stored anonymously.
        </Text>
        <Text color="textSecondary" paragraph>
          In the case of visitors who register a user account, we also store
          information (such as email and username), provided voluntarily, in a
          secure database for purpose of letting you save resources in a list.
        </Text>

        <Text variant="title" color="textSecondary" paragraph marginTop="16px">
          Why we collect data
        </Text>
        <Text color="textSecondary" paragraph>
          User accounts are, of course, collected so that you can save settings
          and resources for later access.
        </Text>
        <Text color="textSecondary" paragraph>
          Anonymous tracking data is stored so that we can improve the user
          experience, and determine how effective our tools are.
        </Text>

        <Text variant="title" color="textSecondary" paragraph marginTop="16px">
          How we collect data
        </Text>
        <Text color="textSecondary" paragraph>
          Data is collected one of two ways:
        </Text>
        <ol>
          <li>
            <Text color="textSecondary">
              Anonymously using Google Analytics tracking scripts.
            </Text>
          </li>
          <li>
            <Text color="textSecondary">
              Through form fields that are filled out voluntarily by viewers.
            </Text>
          </li>
        </ol>

        <Text variant="title" color="textSecondary" paragraph marginTop="16px">
          Who we share your data with
        </Text>
        <Text color="textSecondary" paragraph>
          Data is stored in a few third party servers, such as Google Analytics,
          and on databases hosted in places like Amazon. These are basic
          services that are required to run this app. We cannot operate without
          them. They adhere to strict industry policies of security and privacy.
          They will not share your data without our permission, and we will not
          share it without <strong>your</strong> consent.
        </Text>
        <Text color="textSecondary" paragraph>
          We <strong>never</strong> share identifiable data with third parties
          without your express consent.
        </Text>

        <Text variant="title" color="textSecondary" paragraph marginTop="16px">
          How to have your data removed
        </Text>
        <Text color="textSecondary" paragraph>
          If you would like us to remove your user account, please email{' '}
          {getAppConfigValue('contactEmail')} from the email you used to sign
          up, asking us to remove your account.
        </Text>

        <Text variant="title" color="textSecondary" paragraph marginTop="16px">
          Additional questions
        </Text>
        <Text color="textSecondary" paragraph>
          If you have any other questions about what data we collect, or what we
          do with it, please direct questions to:{' '}
          <Link
            external
            color="primary"
            href={`mailto:${getAppConfigValue(
              'contactEmail'
            )}?subject=Questions%20about%20Privacy%20Policy`}
          >
            {getAppConfigValue('contactEmail')}
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;
