import { useEffect, useState } from 'react';

const baseUrl = 'https://back.wtf2020.help/events';

let events, setEvents;

async function getEvents() {
  setEvents({ loading: true, error: null, data: events.data });
  try {
    await fetch(baseUrl)
      .then(response => response.json())
      .then(data => setEvents({ loading: false, error: null, data: data }))
      .catch(error => setEvents({ loading: false, error: error, data: events.data }));
  } catch (error) {
    setEvents({ loading: false, error: error, data: events.data });
  }
}

const useEvents = () => {
  [events, setEvents] = useState({ loading: true, error: null, data: undefined });
  useEffect(() => {
    getEvents();
    return;
  }, []);
  return events;
};

export default useEvents;
