import { useEffect, useState } from 'react';

import { backendURL } from '../globals';

let event = {},
  setEvent;

export const fetchEventTop = async () => {
  let eventAux = Object.assign({}, event);
  eventAux.loading = true;
  await setEvent(eventAux);
  eventAux = Object.assign({}, event);
  try {
    await fetch(backendURL + '/events?_sort=DateInit:ASC&_limit=1')
      .then(response => response.json())
      .then(async function (data) {
        eventAux.loading = false;
        eventAux.data = data;
      })
      .catch(async function (error) {
        eventAux.loading = false;
        eventAux.error = error;
      });
  } catch (error) {
    eventAux.loading = false;
    eventAux.error = error;
  }
  await setEvent(eventAux);
  console.log('fetchEventTop', event);
};

export const getEventTop = () => {
  return event;
};

export const setEventTop = async eventTop => {
  setEvent({ loading: false, error: null, data: eventTop });
};

export const useEventTop = (eventTop = null) => {
  [event, setEvent] = useState({ loading: true, error: null, data: eventTop });
  useEffect(() => {
    return;
  }, []);
  return [event];
};

export default useEventTop;
