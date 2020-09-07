import { useEffect, useState } from 'react';

import { backendURL } from '../globals';
// import { setEventTop } from './useEventTop';
// import { sortList } from '../utils';
import { getNews } from '../externalApis/news';

let events = {},
  setEvents;

async function checkEventNewsList(eventList) {
  let flag = false;

  await Promise.all(
    eventList.map(async (event, index) => {
      if (event.event_news.length < 10) {
        flag = true;
        await getNews(event, loaderList, false);
      }
    })
  );

  return flag;
}

export const filterEventsByCalendarDate = (date = null) => {
  let filteredEvents = [];
  if (events && 'data' in events && events.data && events.data.length > 0) {
    filteredEvents = events.data.filter(function (itm) {
      return itm.DateInit === date;
    });
  }
  return filteredEvents;
};

export const fetchEventList = async (loading = true) => {
  let eventsAux = Object.assign({}, events);
  eventsAux.loading = loading;
  await setEvents(eventsAux);
  eventsAux = Object.assign({}, events);
  try {
    await fetch(backendURL + '/events?_limit=-1')
      .then(response => response.json())
      .then(async function (data) {
        eventsAux.data = data;
      })
      .catch(async function (error) {
        eventsAux.error = error;
      });
  } catch (error) {
    eventsAux.error = error;
  }
  eventsAux.loading = false;
  await setEvents(eventsAux);
  // setEventTop(sortList(events.data, 'DatePublished'));
  console.log('fetchEventList', events);
  if (await checkEventNewsList(events.data)) await fetchEventList(false);
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
