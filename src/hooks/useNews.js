import { useEffect, useState } from 'react';

import { newsAPIURL } from '../globals';

let news, setNews;

async function getNews() {
  setNews({ loading: true, error: null, data: news.data });
  try {
    await fetch(newsAPIURL + '/News')
      .then(response => response.json())
      .then(data => setNews({ loading: false, error: null, data: data }))
      .catch(error => setNews({ loading: false, error: error, data: news.data }));
    console.log(news);
  } catch (error) {
    setNews({ loading: false, error: error, data: news.data });
  }
}

const useNews = () => {
  [news, setNews] = useState({ loading: true, error: null, data: undefined });
  useEffect(() => {
    getNews();
    return;
  }, []);
  return news;
};

export default useNews;
