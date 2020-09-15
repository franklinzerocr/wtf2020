import { useEffect, useState } from 'react';
import { sortListReverse } from '../utils';

let filteredEvents = {},
  setFilteredEvents;

export const updateFilteredEvents = events => {
  let eventsCopy = [];
  eventsCopy = Object.assign({}, events);
  eventsCopy.data = sortListReverse(eventsCopy.data, 'DateInit');
  setFilteredEvents(eventsCopy);
  return eventsCopy;
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
