import Head from 'next/head';
import Results from '@module/Results/Results';
import Map from 'src/components/modules/Map/Map';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { fetchLocation, setZoom } from 'src/redux/slices/location';
import SessionStorage from '@service/sessionStorage';
import { setResults } from 'src/redux/slices/results';
import { useRouter } from 'next/router';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';
import Search from 'src/components/layouts/Search/Search';
import useFavoritesFetch from '@hook/useFavoritesFetch';

function Favorites() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useFavoritesFetch();

  useEffect(() => {
    if (!auth.isLoggedIn && !auth.isLoading) {
      dispatch(setResults([]));
      router.push({
        pathname: '/signin',
        query: {
          message: 'Please sign in to continue',
        },
      });
    }
  }, [auth.isLoading, auth.isLoggedIn]);

  useEffect(() => {
    (async function () {
      await dispatch(
        fetchLocation({
          location: SessionStorage.get('lastLocation'),
          forceFetch: true,
        })
      );
      dispatch(setZoom(7));
    })();
  }, []);

  return (
    <Search>
      <Head>
        <title>{getAppConfigValue('brandName')} | Profile - Favorites</title>
        <meta
          name="description"
          content={getAppConfigValue('meta.description')}
        />
      </Head>

      <Results hideSearch />

      <Map />
    </Search>
  );
}

export default Favorites;
