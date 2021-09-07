import { AnnouncementOutlined } from '@material-ui/icons';

import Flex from 'src/components/elements/Flex/Flex';
import Alert from 'src/components/elements/Alert/Alert';
import Text from 'src/components/elements/Text/Text';

export function EmergencyInfo({ hit }) {
  if (!hit.emergencyInfo || hit.emergencyInfo.length === 0) return null;

  return (
    <Alert color="error" mb="16px">
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text variant="title">Emergency Info</Text>

        <Text variant="title">
          <AnnouncementOutlined />
        </Text>
      </Flex>

      <Text variant="body1">{hit.emergencyInfo}</Text>
    </Alert>
  );
}

export default EmergencyInfo;
