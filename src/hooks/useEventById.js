import { useEffect, useState } from 'react';

import { backendURL } from '../globals';

let event = {},
  setEvent;

export const fetchEventById = async id => {
  let eventAux = Object.assign({}, event);
  eventAux.loading = true;
  await setEvent(eventAux);
  eventAux = Object.assign({}, event);
  try {
    await fetch(backendURL + '/events/' + id)
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
  console.log('fetchEventById', event);
};

export const getEventById = () => {
  return event;
};

export const setEventById = async eventById => {
  setEvent({ loading: false, error: null, data: eventById });
};

export const useEventById = (eventById = null) => {
  [event, setEvent] = useState({ loading: true, error: null, data: eventById });
  useEffect(() => {
    return;
  }, []);
  return [event];
};

export default useEventById;
