import { useEffect, useState } from 'react';

import { backendURL } from '../globals';
import { setEventTop } from './useEventTop';
import { sortList } from '../utils';
import { getNews } from '../externalApis/news';

let events = {},
  setEvents;

async function checkEventNewsList(eventList) {
  let flag = false;

  await Promise.all(
    eventList.map(async (event, index) => {
      if (event.event_news.length < 10) {
        flag = true;
        await getNews(event, loaderList, 'List');
      }
    })
  );

  return flag;
}

export const fetchEventList = async (loading = true) => {
  let eventsAux = Object.assign({}, events);
  eventsAux.loading = loading;
  await setEvents(eventsAux);
  eventsAux = Object.assign({}, events);
  try {
    await fetch(backendURL + '/events?_limit=-1')
      .then(response => response.json())
      .then(async function (data) {
        eventsAux.loading = false;
        eventsAux.data = data;
      })
      .catch(async function (error) {
        eventsAux.loading = false;
        eventsAux.error = error;
      });
  } catch (error) {
    eventsAux.loading = false;
    eventsAux.error = error;
  }
  await setEvents(eventsAux);
  setEventTop(sortList(events.data, 'DatePublished'));
  console.log('fetchEventList', events);
  if (await checkEventNewsList(events.data)) await fetchEventList();
};

export const loaderList = value => {
  setEvents({ loading: value, error: null, data: events.data });
};

export const getEventList = () => {
  return events;
};

export const useEventList = () => {
  [events, setEvents] = useState({ loading: true, error: null, data: events.data });
  useEffect(() => {
    fetchEventList();
    return;
  }, []);
  return [events];
};

export default useEventList;
