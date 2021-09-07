import { useEffect } from 'react';
import { useAppDispatch } from 'src/redux/store';
import {
  setQuery,
  setLocation,
  setTaxonomies,
  setDistance,
} from 'src/redux/slices/search';
import { useRouter } from 'next/router';

export function useReduxOnRouteChange() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.query.location != null && router.query.location.length > 0) {
      dispatch(setLocation(router.query.location as string));
    }

    if (router.query.taxonomies != null && router.query.taxonomies.length > 0) {
      dispatch(setTaxonomies(router.query.taxonomies as string));
    }

    if (router.query.radius != null && router.query.radius.length > 0) {
      dispatch(setDistance(router.query.radius as string));
    }

    if (
      router.query.taxonomies == null ||
      router.query.taxonomies.length === 0
    ) {
      dispatch(setTaxonomies(''));
    }

    if (router.query.terms != null && router.query.terms.length > 0) {
      dispatch(setQuery(router.query.terms as string));
    }
  }, [
    router.query.location,
    router.query.terms,
    router.query.taxonomies,
    router.query.radius,
  ]);
}

export default useReduxOnRouteChange;
