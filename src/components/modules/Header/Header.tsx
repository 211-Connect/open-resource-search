import { useState } from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Auth } from 'aws-amplify';
import { CloseOutlined, MenuOutlined } from '@material-ui/icons';
import Link from 'src/components/elements/Link/Link';
import Button from 'src/components/elements/Button/Button';
import { useAppSelector } from 'src/redux/store';
import theme from 'src/constants/theme';

import * as Styles from './Header.styles';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  async function logOut() {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Styles.StyledHeader>
        <Styles.StyledContainer>
          <NextLink href="/" passHref>
            {/* eslint-disable-next-line */}
            <a style={{ lineHeight: 0 }}>
              <Styles.StyledImage
                src="/logo.png"
                alt="Go back to search home page"
              />
            </a>
          </NextLink>

          <Styles.VisibleOnMobile>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {isOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </Styles.VisibleOnMobile>
        </Styles.StyledContainer>

        <Styles.HiddenOnMobile>
          {!isLoggedIn ? (
            <>
              <Link
                href="/signin"
                rel="noreferrer"
                variant="normal"
                color="primary"
                style={{
                  marginRight: '1rem',
                }}
              >
                Log In
              </Link>

              <Link
                href="/signup"
                rel="noreferrer"
                color="primary"
                variant="button"
                style={{ marginRight: '1rem' }}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              {/* <Link
                href="/profile"
                rel="noreferrer"
                variant="normal"
                color="primary"
                style={{
                  marginRight: '1rem',
                }}
              >
                My Profile
              </Link> */}

              <Link
                href="/profile/favorites"
                rel="noreferrer"
                variant="normal"
                color="primary"
                style={{
                  marginRight: '1rem',
                }}
              >
                My Favorites
              </Link>

              <Button
                onClick={logOut}
                color="primary"
                style={{ marginRight: '1rem' }}
              >
                Sign Out
              </Button>
            </>
          )}

          {getAppConfigValue('homeUrl') && (
            <>
              <span
                style={{
                  borderRight: `1px solid ${theme.PRIMARY_COLOR}`,
                  marginRight: '1rem',
                  height: 24,
                }}
              ></span>

              <Link
                href={getAppConfigValue('homeUrl')}
                rel="noreferrer"
                variant="normal"
                color="primary"
              >
                Back to Home
              </Link>
            </>
          )}
        </Styles.HiddenOnMobile>

        <Styles.VisibleOnMobile style={{ width: '100%' }}>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ maxHeight: 0, overflow: 'hidden' }}
                animate={{
                  maxHeight: 300,
                }}
                transition={{ duration: 0.3 }}
                exit={{ maxHeight: 0, overflow: 'hidden' }}
                style={{
                  width: '100%',
                  marginBottom: '1rem',
                  overflow: 'unset',
                }}
              >
                <div
                  style={{
                    marginTop: '1rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {!isLoggedIn ? (
                    <>
                      <Link
                        href="/signin"
                        rel="noreferrer"
                        variant="normal"
                        color="primary"
                        style={{ marginBottom: '1rem' }}
                      >
                        Log In
                      </Link>

                      <Link
                        href="/signup"
                        rel="noreferrer"
                        color="primary"
                        variant="button"
                      >
                        Sign Up
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/profile/favorites"
                        rel="noreferrer"
                        variant="normal"
                        color="primary"
                        style={{ marginBottom: '1rem' }}
                      >
                        My Favorites
                      </Link>

                      <Button onClick={logOut} color="primary">
                        Sign Out
                      </Button>
                    </>
                  )}

                  {getAppConfigValue('homeUrl') && (
                    <>
                      <span
                        style={{
                          borderTop: `1px solid ${theme.PRIMARY_COLOR}`,
                          marginTop: '1rem',
                          marginBottom: '1rem',
                          width: 24,
                        }}
                      ></span>

                      <Link
                        href={getAppConfigValue('homeUrl')}
                        rel="noreferrer"
                        variant="normal"
                        color="primary"
                      >
                        Back to Home
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Styles.VisibleOnMobile>
      </Styles.StyledHeader>
    </>
  );
}
