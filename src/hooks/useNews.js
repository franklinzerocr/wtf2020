import { useEffect, useState } from 'react';

import { newsAPIURL, xRapidapiHost, xRapidapiKey, backendURL } from '../globals';
import { addDays, getDateTimeYMD, getEncodedString, sortList } from '../utils';

let news = {},
  setNews;

function constructEncodedEvent(event, i = 1) {
  let encodedEvent = {};
  encodedEvent.fromPublishedDate = event.DateInit;
  encodedEvent.toPublishedDate = getDateTimeYMD(addDays(event.DateInit, 4));
  encodedEvent.autoCorrect = false;
  encodedEvent.pageNumber = i;
  encodedEvent.pageSize = 50;
  encodedEvent.q = event.Keywords;
  encodedEvent.safeSearch = false;
  encodedEvent = getEncodedString(encodedEvent);
  return encodedEvent;
}

function constructEventNews(fetchedNews, event) {
  let eventNews = [];
  let cont = 0;
  for (const newsItem of fetchedNews) {
    cont++;
    let eventNewsAux = {};
    eventNewsAux.Title = newsItem.title.replace(/(<([^>]+)>)/gi, '');
    eventNewsAux.URL = newsItem.url;
    eventNewsAux.event = event.id;
    eventNewsAux.FeaturedImage = newsItem.image.thumbnail;
    eventNewsAux.DatePublished = newsItem.datePublished;
    eventNews.push(eventNewsAux);
    if (cont === 2) break;
  }
  return eventNews;
}

async function postNewsToBackend(eventNews) {
  let errorPOST = {};
  errorPOST.ok = true;
  errorPOST.messages = [];

  await Promise.all(
    eventNews.map(async (eventNewsItem, index) => {
      await fetch(backendURL + '/event-news', {
        method: 'POST',
        body: JSON.stringify(eventNewsItem),
      })
        .then(res2 => res2.json())
        .then(async function (data2) {
          if (!('error' in data2)) console.log('POST event-news', data2);
          else {
            errorPOST.ok = false;
            errorPOST.messages.push([data2.message, eventNewsItem]);
          }
        })
        .catch(async error => {
          errorPOST.ok = false;
          errorPOST.messages.push([error, eventNewsItem]);
        });
    })
  );
  if (!errorPOST.ok) {
    console.log('postNewsToBackend() Error ', errorPOST);
  }
}

async function getNewsPage(event, maxNewsCountDifference, i) {
  let encodedEvent = constructEncodedEvent(event, i);
  let newsPage = {};
  try {
    await fetch(newsAPIURL + encodedEvent, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': xRapidapiHost,
        'x-rapidapi-key': xRapidapiKey,
      },
    })
      .then(res => res.json())
      .then(async function (data) {
        let eventNews = constructEventNews(data.value, event);
        await postNewsToBackend(eventNews);
        newsPage = eventNews;
      })
      .catch(async error => {
        newsPage.error = error;
      });
  } catch (error) {
    newsPage.error = error;
  }
  return newsPage;
}

const getNews = async event => {
  await setNews({ loading: true, error: null, data: news.data });
  let unsortedNews = news.data;
  let error = news.error;
  let eventNewsCount = event.event_news.length;
  console.log('eventNewsCount', eventNewsCount);
  let maxNewsCountDifference = 10 - eventNewsCount;
  if (maxNewsCountDifference > 0)
    await Promise.all(
      [1, 3, 5, 7, 9].map(async (i, index) => {
        let newsPage = await getNewsPage(event, maxNewsCountDifference, i);
        if (!('error' in newsPage) && unsortedNews !== undefined) unsortedNews = unsortedNews.concat(newsPage);
        else if (!('error' in newsPage)) unsortedNews = newsPage;
        else error = newsPage;
      })
    );
  let sortedNews = sortList(unsortedNews, 'DatePublished');
  setNews({ loading: false, error: error, data: sortedNews });
  console.log('getNews', news);
};

const useNews = () => {
  [news, setNews] = useState({ loading: false, error: null, data: news.data });
  useEffect(() => {
    return;
  }, []);
  return [news, getNews, setNews];
};

export default useNews;
