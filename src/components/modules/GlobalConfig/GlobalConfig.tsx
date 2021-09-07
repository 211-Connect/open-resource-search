import useAmplifyHub from '@hook/useAmplifyHub';
import usePathTracking from '@hook/usePathTracking';
import useReduxOnRouteChange from '@hook/useReduxOnRouteChange';
import useSession from '@hook/useSession';

function GlobalConfig({ children }) {
  useReduxOnRouteChange();
  useAmplifyHub();
  usePathTracking();
  useSession();

  return <>{children}</>;
}

export default GlobalConfig;
