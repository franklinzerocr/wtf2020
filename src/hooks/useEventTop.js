import { useEffect, useState } from 'react';
import { backendURL } from '../globals';

let event = {},
  setEvent;

export const loaderTop = value => {
  setEvent({ loading: value, error: null, data: event.data });
};

export const getEventTop = () => {
  return event;
};

export const fetchEventByTitle = async title => {
  let dataRes = {};
  let query = 'Title=' + title;
  try {
    await fetch(backendURL + '/events?' + query)
      .then(response => response.json())
      .then(async function (data) {
        dataRes = data;
      })
      .catch(async function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
  return dataRes[0];
};

export const setEventTop = async eventTop => {
  setEvent({ loading: false, error: null, data: eventTop });
};

export const useEventTop = (eventTop = null) => {
  [event, setEvent] = useState({ loading: true, error: null, data: eventTop });
  useEffect(() => {
    if (!event.data[0]) setEvent({ loading: true, error: null, data: null });
    return;
  }, []);
  return [event];
};

export default useEventTop;
