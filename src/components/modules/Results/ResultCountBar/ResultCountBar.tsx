import Box from 'src/components/elements/Box/Box';
import Text from 'src/components/elements/Text/Text';
import theme from 'src/constants/theme';
import getTextColorContrast from 'src/utils/getTextColorContrast';

export default function ResultCountBar({ results }) {
  return (
    <Box padding="8px 16px" backgroundColor={theme.PRIMARY_COLOR}>
      <Text
        variant="body2"
        style={{ color: getTextColorContrast(theme.PRIMARY_COLOR) }}
      >
        {results.isLoading && 'Loading results...'}
        {!results.isLoading && <>Results: {results.data.length}</>}
      </Text>
    </Box>
  );
}
