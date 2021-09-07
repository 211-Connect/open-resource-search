import Text from 'src/components/elements/Text/Text';
import Link from 'src/components/elements/Link/Link';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { setQuery } from 'src/redux/slices/search';
import { AlertsContainer, Container } from './AlertSearch.styles';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';

export default function AlertSearch() {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.search.location);

  if (
    getAppConfigValue('alertSearch.url') == null ||
    getAppConfigValue('alertSearch.text') == null ||
    getAppConfigValue('alertSearch.buttonText') == null
  ) {
    return null;
  }

  function clearQuery() {
    dispatch(setQuery(''));
  }

  let href = getAppConfigValue('alertSearch.url');

  if (location != null && location.length > 0) {
    href += `&location=${location}`;
  }

  return (
    <Container>
      <AlertsContainer>
        <Text variant="h2" paddingRight="8px">
          {getAppConfigValue('alertSearch.text')}
        </Text>

        <Link onClick={clearQuery} href={href} variant="button" color="primary">
          {getAppConfigValue('alertSearch.buttonText')}
        </Link>
      </AlertsContainer>
    </Container>
  );
}
