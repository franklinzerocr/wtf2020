import { useEffect, useState } from 'react';

import { backendURL } from '../globals';
import { setEventTop } from './useEventTop';
import { sortList } from '../utils';

let events = {},
  setEvents;

export const fetchEventList = async () => {
  let eventsAux = Object.assign({}, events);
  eventsAux.loading = true;
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
