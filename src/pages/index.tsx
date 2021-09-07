import Head from 'next/head';
import Flex from 'src/components/elements/Flex/Flex';
import Box from 'src/components/elements/Box/Box';
import Text from 'src/components/elements/Text/Text';
import Link from 'src/components/elements/Link/Link';
import AlertSearch from 'src/components/modules/AlertSearch/AlertSearch';
import Categories from 'src/components/modules/Categories/Categories';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/redux/store';
import { setLocation } from 'src/redux/slices/search';
import SessionStorage from '@service/sessionStorage';
import theme from 'src/constants/theme';
import color from 'color';
import getTextColorContrast from 'src/utils/getTextColorContrast';
import Search from '@module/Search/Search';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';
import Default from 'src/components/layouts/Default/Default';
import If from '@element/If/If';

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (SessionStorage.has('lastLocation')) {
      dispatch(setLocation(SessionStorage.get('lastLocation')));
    }
  }, []);

  return (
    <Default>
      <Head>
        <title>{getAppConfigValue('brandName')}</title>
        <meta
          name="description"
          content={getAppConfigValue('meta.description')}
        />
      </Head>

      <Flex
        background="url('/hero.jpg') center bottom / cover"
        maxWidth={1400}
        margin="0 auto"
        minHeight="35vw"
        padding="16px"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxWidth={840}
          minWidth={[320, 600]}
          padding="16px"
          borderRadius={theme.BORDER_RADIUS}
          backgroundColor={color(theme.PRIMARY_COLOR).alpha(0.9).string()}
        >
          <Text
            variant="h1"
            style={{
              color: getTextColorContrast(
                color(theme.PRIMARY_COLOR).alpha(0.9).string()
              ),
            }}
            marginBottom="16px"
          >
            {getAppConfigValue('search.title')}
          </Text>

          <Search />

          <If value={getAppConfigValue('search.subtitle')}>
            <Text color="textPrimary" marginTop="4px">
              {getAppConfigValue('search.subtitle')}
              {getAppConfigValue('search.subtitleUrlText') && ' '}
              {getAppConfigValue('search.subtitleUrl') &&
                getAppConfigValue('search.subtitleUrlText') && (
                  <Link
                    href={getAppConfigValue('search.subtitleUrl')}
                    rel="noreferrer"
                    variant="normal"
                    color="textPrimary"
                    style={{
                      textDecoration: 'underline',
                    }}
                  >
                    {getAppConfigValue('search.subtitleUrlText')}
                  </Link>
                )}
            </Text>
          </If>
        </Box>
      </Flex>

      <AlertSearch />

      <Categories />
    </Default>
  );
}

export default Home;
