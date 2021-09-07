import { useEffect } from 'react';
import { useRouter } from 'next/router';

import SessionStorage from '@service/sessionStorage';

export function usePathTracking() {
  const router = useRouter();

  useEffect(() => {
    // Set the previous path as the value of the current path.
    const prevPath = SessionStorage.get('currentPath');
    SessionStorage.set('prevPath', prevPath);
    // Set the current path value by looking at the browser's location object.
    SessionStorage.set('currentPath', window.location.pathname);
  }, [router.asPath]);
}

export default usePathTracking;
