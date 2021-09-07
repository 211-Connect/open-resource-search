import { useEffect } from 'react';
import { Hub } from 'aws-amplify';

import { login, logout, checkAuthStatus } from 'src/redux/slices/auth';
import { useAppDispatch } from 'src/redux/store';

// Handle events from Amplify and dispatch to Redux
export function useAmplifyHub() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Check to see if user is logged in
    dispatch(checkAuthStatus());
  }, []);

  useEffect(() => {
    function authListener(data) {
      switch (data.payload.event) {
        case 'signIn':
          dispatch(login());
          break;
        case 'signOut':
          dispatch(logout());
          break;
      }
    }

    Hub.listen('auth', authListener);

    return () => Hub.remove('auth', authListener);
  }, []);
}

export default useAmplifyHub;
