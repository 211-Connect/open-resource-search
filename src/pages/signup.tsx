import { useRef } from 'react';
import { Auth } from 'aws-amplify';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'src/components/elements/Link/Link';
import Text from 'src/components/elements/Text/Text';
import Button from 'src/components/elements/Button/Button';
import Input from 'src/components/elements/Input/Input';
import Label from 'src/components/elements/Label/Label';
import Flex from 'src/components/elements/Flex/Flex';
import Box from 'src/components/elements/Box/Box';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';
import AuthLayout from 'src/components/layouts/Auth/Auth';
import redirect from 'src/utils/redirect';

export const getServerSideProps = (context) => {
  if (context.user != null) return redirect('/');

  return {
    props: {},
  };
};

function SignUp() {
  const router = useRouter();
  const username = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  const firstName = useRef<HTMLInputElement>();
  const lastName = useRef<HTMLInputElement>();

  const signUp = async (e) => {
    e.preventDefault();

    try {
      await Auth.signUp({
        username: username.current.value,
        password: password.current.value,
        attributes: {
          given_name: firstName.current.value,
          family_name: lastName.current.value,
        },
      });

      router.push(
        `/signin?message=${encodeURIComponent(
          'Please check your inbox for a verification email.'
        )}&email=${encodeURIComponent(username.current.value)}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthLayout>
      <Head>
        <title>{getAppConfigValue('brandName')} | Sign Up</title>
        <meta
          name="description"
          content={getAppConfigValue('meta.description')}
        />
      </Head>
      <form
        onSubmit={signUp}
        style={{
          backgroundColor: '#fff',
          padding: '16px',
          width: '100%',
          maxWidth: 360,
          borderRadius: 6,
          marginBottom: '16px',
        }}
      >
        <Text color="textSecondary" variant="h2" marginBottom="16px">
          Sign Up
        </Text>

        <Flex marginBottom="16px">
          <Box marginRight="4px">
            <Label
              id="email-label"
              htmlFor="first-name"
              color="textSecondary"
              marginBottom="8px"
            >
              First Name
            </Label>
            <Input
              fullWidth
              ref={firstName}
              id="first-name"
              style={{
                border: '1px solid #ebebeb',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
              placeholder="John"
              type="text"
            />
          </Box>

          <Box marginLeft="4px">
            <Label
              id="last-name-label"
              htmlFor="last-name"
              marginBottom="8px"
              color="textSecondary"
            >
              Last Name
            </Label>
            <Input
              fullWidth
              ref={lastName}
              id="last-name"
              style={{
                border: '1px solid #ebebeb',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
              placeholder="Doe"
              type="text"
            />
          </Box>
        </Flex>

        <Label
          id="email-label"
          htmlFor="email"
          color="textSecondary"
          marginBottom="8px"
        >
          Email
        </Label>
        <Input
          fullWidth
          ref={username}
          id="email"
          placeholder="johndoe@example.com"
          type="email"
          marginBottom="16px"
          style={{
            border: '1px solid #ebebeb',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        />

        <Label
          id="password-label"
          htmlFor="password"
          color="textSecondary"
          marginBottom="8px"
        >
          Password
        </Label>
        <Input
          fullWidth
          ref={password}
          id="password"
          placeholder="SuperSecretPassword"
          type="password"
          marginBottom="16px"
          style={{
            border: '1px solid #ebebeb',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        />

        <Button type="submit" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <Text paragraph>
        Already have an account?{' '}
        <Link color="textPrimary" href="/signin">
          Sign In
        </Link>
      </Text>
      <Text>
        <Link color="textPrimary" href="/">
          Back to home page
        </Link>
      </Text>
    </AuthLayout>
  );
}

export default SignUp;
