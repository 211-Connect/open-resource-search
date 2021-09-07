import Head from 'next/head';
import Results from 'src/components/modules/Results/Results';
import Map from 'src/components/modules/Map/Map';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/redux/store';
import { setResults } from 'src/redux/slices/results';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';
import SearchLayout from 'src/components/layouts/Search/Search';
import useResultsFetch from '@hook/useResultsFetch';

function Search() {
  const dispatch = useAppDispatch();

  useResultsFetch();

  useEffect(() => {
    dispatch(setResults([]));
  }, []);

  return (
    <SearchLayout>
      <Head>
        <title>{getAppConfigValue('brandName')} | Search</title>
        <meta name="description" content="" />
      </Head>

      <Results hideSearch={false} />
      <Map />
    </SearchLayout>
  );
}

export default Search;
