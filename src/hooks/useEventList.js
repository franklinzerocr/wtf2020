import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { backendURL } from '../globals';
import { setEventTop, getEventTop } from './useEventTop';
import { sortList, sleep, getCalendarDate } from '../utils';
import { getNews } from '../externalApis/news';
import { updateMonthTags } from './usetMonthTags';
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

function getEventByTitle(title) {
  let eventByTitle = events.data.filter(function (itm) {
    return itm.Title.toUpperCase() === title.toUpperCase();
  });
  return eventByTitle[0];
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
        eventsAux.data = data;
      })
      .catch(async function (error) {
        eventsAux.error = error;
      });
  } catch (error) {
    eventsAux.error = error;
  }
  eventsAux.loading = false;
  eventsAux.data = await sortList(eventsAux.data, 'DateInit');
  await checkEventNewsList(eventsAux.data);
  await setEvents(eventsAux);
  if (events && events.data && !getEventTop().data) await setEventTop(events.data[0]);
  else {
    let title = getEventTop().data[0];
    title = title.split('-').join(' ');
    let eventTop = getEventByTitle(title);
    if (eventTop) {
      await setEventTop(eventTop);
      updateLayout(eventTop.Title + ' - WTF 2020', 'Home');
    } else {
      getEventTop().data[1].push('/Dead-Link');
    }
  }

  await updateFilteredEvents(events);

  updateMonthTags();
  changeBackgroundOfButtons();

  // console.log(events);
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
