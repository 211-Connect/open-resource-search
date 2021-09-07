import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { setCookie } from 'nookies';

import SessionStorage from '@service/sessionStorage';

export function useSession() {
  useEffect(() => {
    let sessionId = SessionStorage.get('sessionId');

    if (!sessionId) {
      sessionId = uuid();
      setCookie(null, 'sessionId', sessionId);
      SessionStorage.set('sessionId', sessionId);
    }
  }, []);
}

export default useSession;
