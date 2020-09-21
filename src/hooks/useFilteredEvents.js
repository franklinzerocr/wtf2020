import { useEffect, useState } from 'react';
import { sortList, sortListReverse } from '../utils';
import { updateMonthTags } from './usetMonthTags';

let filteredEvents = {},
  setFilteredEvents;

export const updateFilteredEvents = events => {
  let eventsCopy = [];
  eventsCopy = Object.assign({}, events);
  eventsCopy.data = sortListReverse(eventsCopy.data, 'DateInit');
  setFilteredEvents(eventsCopy);
  updateMonthTags();
  return eventsCopy;
};

export const sortFilteredEvents = (events, sort) => {
  let eventsCopy = [];
  eventsCopy = Object.assign({}, events);
  if (sort === 'down') {
    eventsCopy.data = sortListReverse(eventsCopy.data, 'DateInit');
  } else {
    eventsCopy.data = sortList(eventsCopy.data, 'DateInit');
  }
  setFilteredEvents(eventsCopy);
  updateMonthTags();
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
