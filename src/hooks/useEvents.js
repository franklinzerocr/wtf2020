import { useEffect, useState } from 'react';

import { backendURL } from '../globals';

let events = {},
  setEvents;

const getEvents = async () => {
  setEvents({ loading: true, error: null, data: events.data });
  try {
    await fetch(backendURL + '/events')
      .then(response => response.json())
      .then(async data => await setEvents({ loading: false, error: null, data: data }))
      .catch(async error => await setEvents({ loading: false, error: error, data: events.data }));
    console.log('getEvents', events);
  } catch (error) {
    setEvents({ loading: false, error: error, data: events.data });
  }
};

const useEvents = () => {
  [events, setEvents] = useState({ loading: true, error: null, data: events.data });
  useEffect(() => {
    getEvents();
    return;
  }, []);
  return [events, getEvents, setEvents];
};

export default useEvents;
