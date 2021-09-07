import { useEffect, useState } from 'react';
import makeObservable from 'src/utils/makeObservable';
import axios from 'axios';
import SessionStorage from '@service/sessionStorage';
import { getAppConfigValue } from 'src/utils/getAppConfigValue';

let cachedQueries = makeObservable({});
if (process.browser) {
  cachedQueries = makeObservable(SessionStorage.get('locationCache') || {});
}

function useCachedLocations(key) {
  const [query, setQuery] = useState(cachedQueries.get());

  if (typeof key === 'string') {
    key = key.trim();
  }

  useEffect(() => {
    cachedQueries.subscribe(setQuery);
  }, []);

  useEffect(() => {
    (async function () {
      if (key != null && key.length > 0 && query[key] == null) {
        const currentKey = key;
        const res = await axios.get(
          `${getAppConfigValue('apiUrl')}/api/v1/place?q=${currentKey}`
        );
        const newCache = {
          ...query,
          [currentKey]: res?.data ?? [],
        };
        cachedQueries.set(newCache);
        SessionStorage.set('locationCache', newCache);
      }
    })();
  }, [key]);

  let currentValue = query[key];

  if (currentValue == null) {
    const keys = Object.keys(query);

    for (let i = keys.length - 1; i >= 0 && currentValue == null; i--) {
      if (query[keys[i]] != null) {
        currentValue = query[keys[i]];
      }

      if (currentValue == null && i === 0) {
        currentValue = [];
      }
    }
  }

  return currentValue || [];
}

export default useCachedLocations;
