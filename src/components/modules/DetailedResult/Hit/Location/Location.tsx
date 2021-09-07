import Skeleton from 'react-loading-skeleton';
import { Room } from '@material-ui/icons';
import Text from 'src/components/elements/Text/Text';
import theme from 'src/constants/theme';

export default function Location({ hit }) {
  return (
    <Text
      variant="subtitle"
      color="primary"
      marginTop="4px"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      {!hit && <Skeleton />}

      {hit && hit.locationName && (
        <>
          <Room style={{ marginRight: '4px', color: theme.SECONDARY_COLOR }} />
          {hit.locationName}
        </>
      )}
    </Text>
  );
}
