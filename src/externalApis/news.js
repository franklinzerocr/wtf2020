import { newsAPIURL, xRapidapiHost, xRapidapiKey, backendURL } from '../globals';
import { addDays, getDateTimeYMD, getEncodedString, sortList } from '../utils';
import { fetchEventList } from '../hooks/useEventList';

function constructEncodedEvent(event, i = 1) {
  let encodedEvent = {};
  encodedEvent.fromPublishedDate = event.DateInit;
  encodedEvent.toPublishedDate = getDateTimeYMD(addDays(event.DateInit, 4));
  encodedEvent.autoCorrect = false;
  encodedEvent.pageNumber = i;
  encodedEvent.pageSize = 20;
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
          // console.log('POST event-news', data2);
          if ('error' in data2) {
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

async function fetchNewsPage(event, maxNewsCountDifference, i) {
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
        // console.log('data API', encodedEvent, data);
        let eventNews = constructEventNews(data.value, event);
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

export const getNews = async (event, elementLoader, recursive = true) => {
  let unsortedNews = event.event_news;
  let news = [];
  let maxNewsCountDifference = 10 - event.event_news.length;
  if (maxNewsCountDifference > 0) {
    elementLoader(true);
    await Promise.all(
      [1, 2, 3, 4, 5].map(async (i, index) => {
        let newsPage = await fetchNewsPage(event, maxNewsCountDifference, i);
        if (!('error' in newsPage) && unsortedNews !== undefined) unsortedNews = unsortedNews.concat(newsPage);
        else if (!('error' in newsPage)) unsortedNews = newsPage;
      })
    );
    news = sortList(unsortedNews, 'DatePublished');
    await postNewsToBackend(news);
    if (recursive) await fetchEventList(false);
    elementLoader(false);
  } else news = sortList(unsortedNews, 'DatePublished');
  return news;
};
