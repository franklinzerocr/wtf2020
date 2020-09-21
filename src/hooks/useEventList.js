import { useEffect, useState } from 'react';

import { backendURL, pagination } from '../globals';
import { setEventTop, getEventTop, fetchEventByTitle } from './useEventTop';
import { sortList, sleep, getCalendarDate } from '../utils';
import { getNews } from '../externalApis/news';
import { updateFilteredEvents } from './useFilteredEvents';
import { changeBackgroundOfButtons } from '../components/Calendar/CalendarSection';
import { updateLayout } from './useLayout';

let events = {},
  setEvents;

export function getFeaturedEvents() {
  let featuredEvents = [];
  if (events.data)
    featuredEvents = events.data.filter(function (itm) {
      return itm.Featured;
    });
  return featuredEvents;
}

export function getDaysWithEvents() {
  let daysWithEvents = [];
  if (events.data)
    for (let event of events.data) {
      let calendarDate = getCalendarDate(event.DateInit);
      let dayFound = daysWithEvents.filter(function (itm) {
        return itm === calendarDate;
      });

      if (!dayFound || dayFound.length === 0) daysWithEvents.push(getCalendarDate(event.DateInit));
    }

  return daysWithEvents;
}

async function checkEventNewsList(eventList) {
  let flag = false;
  if (eventList)
    for (let event of eventList) {
      if (event.event_news.length < 10) {
        console.log('Event News NOT FULL', event);
        flag = true;
        await getNews(event, loaderList, false);
        await sleep(1000);
      }
    }

  return flag;
}

export const filterEventsByCalendarDate = (date = null) => {
  let filteredEvents = [];
  if (date && events && 'data' in events && events.data && events.data.length > 0) {
    filteredEvents = events.data.filter(function (itm) {
      return itm.DateInit === date;
    });
  }
  return filteredEvents;
};

export const fetchEventList = async (loading = true, recursive = false) => {
  let eventsAux = Object.assign({}, events);
  let dataRes = {};
  let query = '_sort=DateInit:desc,id:desc&_limit=1';
  eventsAux.loading = loading;
  await setEvents(eventsAux);
  eventsAux = Object.assign({}, events);
  if (recursive) query = '_sort=DateInit:desc,id:desc&_start=' + recursive + '&_limit=' + pagination;
  try {
    await fetch(backendURL + '/events?' + query)
      .then(response => response.json())
      .then(async function (data) {
        eventsAux.data = data;
        dataRes = data;
      })
      .catch(async function (error) {
        eventsAux.error = error;
        console.log(error);
      });
  } catch (error) {
    eventsAux.error = error;
  }
  if (!recursive || dataRes.length === pagination) eventsAux.loading = true;
  else eventsAux.loading = false;
  eventsAux.data = await sortList(eventsAux.data, 'DateInit');
  await checkEventNewsList(eventsAux.data);
  if (events.data) {
    eventsAux.data = eventsAux.data.concat(events.data);
  }
  await setEvents(eventsAux);
  if (events && events.data && !getEventTop().data) await setEventTop(events.data[0]);
  else if (!getEventTop().data && !getEventTop().data.length) {
    return null;
  } else if (!recursive) {
    let title = getEventTop().data[0];
    title = title.split('-').join(' ');
    let eventTop = await fetchEventByTitle(title);
    if (eventTop) {
      updateLayout(eventTop.Title + ' - WTF 2020', 'Home', backendURL + eventTop.FeaturedImage.url);
      await setEventTop(eventTop);
    } else {
      getEventTop().data[1].push('/Dead-Link');
      return null;
    }
  }

  await updateFilteredEvents(events);
  changeBackgroundOfButtons();
  if (!recursive || dataRes.length === pagination) {
    await fetchEventList(true, events.data.length);
  }
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
