import { useEffect, useState } from 'react';

const baseUrl = 'https://back.wtf2020.help/events';

const useEvents = () => {
  const [events, setEvents] = useState({ loading: true, error: null, data: undefined });
  useEffect(() => {
    setEvents({ loading: true, error: null, data: events.data });
    try {
      fetch(baseUrl)
        .then(response => response.json())
        .then(data => setEvents({ loading: false, error: null, data: data }))
        .catch(error => setEvents({ loading: false, error: error, data: events.data }));
    } catch (error) {
      setEvents({ loading: false, error: error, data: events.data });
    }
  }, []);
  return events;
};

export default useEvents;
