import { useEffect, useState } from 'react';

let filteredEvents = {},
  setFilteredEvents;

export const updateFilteredEvents = events => {
  setFilteredEvents(events);
};

export const getFilteredEvents = () => {
  return filteredEvents;
};

export const useFilteredEvents = () => {
  [filteredEvents, setFilteredEvents] = useState({ loading: true, error: null, data: filteredEvents.data });
  useEffect(() => {
    return;
  }, []);
  return [filteredEvents];
};

export default useFilteredEvents;
