import { useAppSelector, useAppDispatch } from 'src/redux/store';
import { deleteFavoriteById, setResults } from 'src/redux/slices/results';
import { FavoriteOutlined } from '@material-ui/icons';
import Button from 'src/components/elements/Button/Button';

export default function FavoriteButton({ hit }) {
  const dispatch = useAppDispatch();
  const results = useAppSelector((state) => state.results.data);

  async function removeFromFavorites() {
    const oldResults = [].concat(results);

    try {
      const removedIndex = results.findIndex((el) => el.id === hit.id);

      const newResults = [...results];
      newResults.splice(removedIndex, 1);

      dispatch(setResults(newResults));

      await dispatch(deleteFavoriteById(hit.id));
    } catch (err) {
      console.error(err);
      dispatch(setResults(oldResults));
    }
  }

  return (
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
      }}
      onClick={removeFromFavorites}
    >
      <FavoriteOutlined style={{ color: '#DA291C', width: 40, height: 40 }} />
    </Button>
  );
}
