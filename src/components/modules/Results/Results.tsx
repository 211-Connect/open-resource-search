import React, { useRef } from 'react';
import { useAppSelector } from 'src/redux/store';
import { useRouter } from 'next/router';

import FeedbackMargin from '../FeedbackButton/FeedbackMargin';
import { StyledResults } from './Results.styles';
import ResultCountBar from './ResultCountBar/ResultCountBar';
import ResultsLoader from './ResultsLoader/ResultsLoader';
import Search from '@module/Search/Search';
import { Box } from 'src/components/elements/Box/Box';
import { Text } from 'src/components/elements/Text/Text';

export default function Results({ hideSearch }) {
  const router = useRouter();
  const scrollParent = useRef();
  const results = useAppSelector((state) => state.results);
  const location = useAppSelector((state) => state.location);
  const taxonomies = useAppSelector((state) => state.search.taxonomies);

  return (
    <StyledResults ref={scrollParent}>
      {!hideSearch && (
        <Box padding="16px" backgroundColor="#ECE9F1">
          <Search variant="filled" />

          {router.query.taxonomies != null &&
            router.query.taxonomies.length > 0 && (
              <Text color="textSecondary">Taxonomy Search: {taxonomies}</Text>
            )}
        </Box>
      )}

      <ResultCountBar results={results} />
      <ResultsLoader results={results} location={location} />
      <FeedbackMargin />
    </StyledResults>
  );
}
