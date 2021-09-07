import Alert from 'src/components/elements/Alert/Alert';
import { useAppSelector, useAppDispatch } from 'src/redux/store';
import { CSSProperties, useEffect } from 'react';
import { setLoadingState, setUrl } from 'src/redux/slices/page';
import { useRouter } from 'next/router';
import TransitionSpinner from './TransitionSpinner';

type Props = {
  style?: CSSProperties;
};

function PageTransition({ style }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.page);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (!shallow) {
        dispatch(setUrl(url));
        dispatch(setLoadingState(true));
      }
    };

    const handleRouteChangeComplete = () => {
      dispatch(setLoadingState(false));
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  if (!page.isLoading) return null;

  return (
    <Alert
      color="secondary"
      style={{
        display: 'flex',
        alignItems: 'center',
        ...style,
      }}
    >
      <TransitionSpinner style={{ marginRight: '4px' }} /> Loading URL:{' '}
      {page.url}
    </Alert>
  );
}

export default PageTransition;
