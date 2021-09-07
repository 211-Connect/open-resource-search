import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'src/redux/store';
import {
  fetchResults,
  fetchResultsByTaxonomies,
} from 'src/redux/slices/results';
import { fetchLocation } from 'src/redux/slices/location';

function useResultsFetch() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      if (router.query.location != null && router.query.location.length > 0) {
        await dispatch(
          fetchLocation({
            location: router.query.location as string,
          })
        );
      } else {
        await dispatch(fetchLocation({ location: null }));
      }

      if (
        router.query.taxonomies != null &&
        router.query.taxonomies.length > 0
      ) {
        // fetch by taxonomies
        await dispatch(
          fetchResultsByTaxonomies(router.query.taxonomies as string)
        );
      } else {
        await dispatch(fetchResults(router.query.terms as string));
      }
    })();
  }, [
    router.query.location,
    router.query.terms,
    router.query.taxonomies,
    router.query.radius,
  ]);
}

export default useResultsFetch;
