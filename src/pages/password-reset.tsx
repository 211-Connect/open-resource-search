import { useRef, useState } from 'react';
import { Link } from 'src/components/elements/Link/Link';
import { Text } from 'src/components/elements/Text/Text';
import { Button } from 'src/components/elements/Button/Button';
import { Input } from 'src/components/elements/Input/Input';
import { Flex } from 'src/components/elements/Flex/Flex';
import { Label } from 'src/components/elements/Label/Label';
import { Box } from 'src/components/elements/Box/Box';
import Head from 'next/head';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import redirect from 'src/utils/redirect';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';
import If from '@element/If/If';

type Props = {
  query: {
    confirmation_code?: string;
    user_name?: string;
  };
};

export const getServerSideProps = (context) => {
  if (context.user != null) return redirect('/');

  return {
    props: {
      query: context.query,
    },
  };
};

function PasswordReset({ query }: Props) {
  const username = useRef<HTMLInputElement>();
  const newPassword = useRef<HTMLInputElement>();
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (query.confirmation_code != null && query.user_name != null) {
        await Auth.forgotPasswordSubmit(
          query.user_name,
          query.confirmation_code,
          newPassword?.current?.value ?? ''
        );
        router.push(
          '/signin?message=Password%20saved.%20Sign%20in%20with%20your%20new%20password.'
        );
      } else {
        await Auth.forgotPassword(username?.current?.value ?? '');
        setMessage(
          'If an account exists with this email address, you will be receiving a confirmation link to your inbox.'
        );
      }
    } catch (err) {
      setMessage('');
      setErrorMessage(err?.message ?? '');
    }
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Head>
        <title>{getAppConfigValue('brandName')} | Sign In</title>
        <meta
          name="description"
          content={getAppConfigValue('meta.description')}
        />
      </Head>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#fff',
          padding: '16px',
          width: '100%',
          maxWidth: 360,
          borderRadius: 6,
          marginBottom: '16px',
        }}
      >
        <If value={message.length > 0}>
          <Box
            marginBottom="8px"
            backgroundColor="#3faa4b"
            borderRadius="6px"
            padding="8px"
          >
            {message}
          </Box>
        </If>

        <If value={errorMessage.length > 0}>
          <Box
            marginBottom="8px"
            backgroundColor="#DA291C"
            color="#fff"
            borderRadius="6px"
            padding="8px"
          >
            {errorMessage}
          </Box>
        </If>

        <If value={query.confirmation_code != null && query.user_name != null}>
          <Text variant="h2" color="textSecondary" marginBottom="16px">
            Change Password
          </Text>
          <Label
            id="password-label"
            htmlFor="password"
            marginBottom="8px"
            color="textSecondary"
          >
            New Password
          </Label>
          <Input
            fullWidth
            ref={newPassword}
            id="password"
            style={{
              border: '1px solid #ebebeb',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            placeholder="NewSuperSecretPassword"
            type="password"
            marginBottom="16px"
          />
          <Button type="submit" color="primary">
            Change Password
          </Button>
        </If>

        <If value={query.confirmation_code == null && query.user_name == null}>
          <Text variant="h2" color="textSecondary" marginBottom="16px">
            Password Reset
          </Text>
          <Label
            id="email-label"
            htmlFor="email"
            marginBottom="8px"
            color="textSecondary"
          >
            Email
          </Label>
          <Input
            fullWidth
            ref={username}
            id="email"
            style={{
              border: '1px solid #ebebeb',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            placeholder="johndoe@example.com"
            type="email"
            marginBottom="16px"
          />
          <Button type="submit" color="primary">
            Send Code
          </Button>
        </If>
      </form>

      <Text paragraph>
        Want to sign in?{' '}
        <Link color="textPrimary" href="/signin">
          Log In
        </Link>
      </Text>
      <Text>
        <Link color="textPrimary" href="/">
          Back to home page
        </Link>
      </Text>
    </Flex>
  );
}

export default PasswordReset;
