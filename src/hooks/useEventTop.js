import { useEffect, useState } from 'react';

let event = {},
  setEvent;

export const loaderTop = value => {
  setEvent({ loading: value, error: null, data: event.data });
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
    if (!event.data[0]) setEvent({ loading: true, error: null, data: null });
    return;
  }, []);
  return [event];
};

export default useEventTop;
