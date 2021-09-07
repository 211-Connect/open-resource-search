import axios from 'axios';

export const fetcher = (url) =>
  axios.get(url).then((res) => {
    if (res.data != null && typeof res.data != 'string') {
      return true;
    }

    return false;
  });
