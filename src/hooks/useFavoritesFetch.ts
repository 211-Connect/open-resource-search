import { useEffect } from 'react';
import { useAppDispatch } from 'src/redux/store';
import { fetchFavorites } from 'src/redux/slices/results';

function useFavoritesFetch() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      await dispatch(fetchFavorites());
    })();
  }, []);
}

export default useFavoritesFetch;
