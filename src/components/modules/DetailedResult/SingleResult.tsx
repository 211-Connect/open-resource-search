import Box from 'src/components/elements/Box/Box';
import Alert from 'src/components/elements/Alert/Alert';

import Hit from './Hit/Hit';
import FeedbackMargin from '../FeedbackButton/FeedbackMargin';
import { SingleResultContainer } from './SingleResult.styles';

type SingleResultProps = {
  data?: any;
  query?: any;
};

export default function SingleResult({ data, query }: SingleResultProps) {
  if (!data && !query) {
    return (
      <SingleResultContainer>
        <Box padding="8px">
          <Alert color="error">
            No data was found for this result. If you believe this is a mistake,
            please submit a request through our feedback form.
          </Alert>
        </Box>
      </SingleResultContainer>
    );
  }

  return (
    <SingleResultContainer>
      <Hit hit={data} query={query} />
      <FeedbackMargin />
    </SingleResultContainer>
  );
}
