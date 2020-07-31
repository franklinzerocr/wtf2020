import { useEffect, useState } from 'react';

import { newsAPIURL, xRapidapiHost, xRapidapiKey } from '../globals';
import { addDays, getDateTimeYMD, getEncodedString } from '../utils';

let news = {},
  setNews;

const encodeEvent = event => {
  let encodedEvent = {};
  encodedEvent.fromPublishedDate = event.DateInit;
  encodedEvent.toPublishedDate = getDateTimeYMD(addDays(event.DateInit, 4));
  encodedEvent.autoCorrect = false;
  encodedEvent.pageNumber = 1;
  encodedEvent.pageSize = 10;
  encodedEvent.q = event.Keywords;
  encodedEvent.safeSearch = false;
  encodedEvent = getEncodedString(encodedEvent);
  return encodedEvent;
};

const getNews = async event => {
  await setNews({ loading: true, error: null, data: news.data });
  let encodedEvent = encodeEvent(event);
  try {
    await fetch(newsAPIURL + encodedEvent, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': xRapidapiHost,
        'x-rapidapi-key': xRapidapiKey,
      },
    })
      .then(response => response.json())
      .then(data => setNews({ loading: false, error: null, data: data }))
      .catch(error => setNews({ loading: false, error: error, data: news.data }));
    console.log('getNews', news);
  } catch (error) {
    setNews({ loading: false, error: error, data: news.data });
  }
};

const useNews = () => {
  [news, setNews] = useState({ loading: false, error: null, data: news.data });
  useEffect(() => {
    return;
  }, []);
  return [news, getNews, setNews];
};

export default useNews;
