import { API } from 'aws-amplify';
import { useAppSelector } from 'src/redux/store';
import Button from 'src/components/elements/Button/Button';
import { FavoriteOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import useSWR from 'swr';

const FavoriteFetcher = (url) => API.get('favorites', url, null);

export default function FavoriteButton({ hit, query }) {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const { data: isFavorited, mutate } = useSWR(
    isLoggedIn ? `/${query.id}` : null,
    FavoriteFetcher
  );

  async function addToFavorites() {
    if (isLoggedIn && !isFavorited) {
      try {
        await mutate(true, false);
        await API.post('favorites', '/', {
          body: {
            id: hit.id,
          },
        });
      } catch (err) {
        console.error(err);
        await mutate(false, false);
      }
    }
  }

  async function removeFromFavorites() {
    if (isLoggedIn && isFavorited) {
      try {
        mutate(false, false);
        await API.del('favorites', `/${hit.id}`, null);
      } catch (err) {
        console.error(err);
        await mutate(true, false);
      }
    }
  }

  if (!hit) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!isFavorited && isLoggedIn && (
        <Button
          noPrint
          noShadows
          aria-label="Add to Favorites"
          style={{
            background: 'none',
            fontSize: 15,
            lineHeight: 1.4,
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Open Sans,sans-serif',
            cursor: 'pointer',
            padding: 0,
            color: '#666',
            fontWeight: 300,
            width: 40,
            height: 40,
            marginBottom: 16,
            alignSelf: 'flex-end',
          }}
          onClick={() => addToFavorites()}
        >
          <FavoriteBorderOutlined
            style={{ color: '#DA291C', width: 40, height: 40 }}
          />{' '}
        </Button>
      )}

      {isFavorited && isLoggedIn && (
        <Button
          noPrint
          noShadows
          aria-label="Remove from Favorites"
          style={{
            background: 'none',
            color: '#666',
            fontSize: 15,
            lineHeight: 1.4,
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Open Sans,sans-serif',
            cursor: 'pointer',
            padding: 0,
            fontWeight: 300,
            width: 40,
            height: 40,
            marginBottom: 16,
            alignSelf: 'flex-end',
          }}
          onClick={() => removeFromFavorites()}
        >
          <FavoriteOutlined
            style={{ color: '#DA291C', width: 40, height: 40 }}
          />
        </Button>
      )}
    </div>
  );
}
