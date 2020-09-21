import { useEffect, useState } from 'react';
import { sortFilteredEvents } from './useFilteredEvents';

let sort = {},
  setSort;

export function updateSortFilteredEvents(filteredEvents, sorting) {
  sortFilteredEvents(filteredEvents, sorting);
  setSort(sorting);
}

export const getSort = () => {
  return sort;
};

export const useSort = sorting => {
  [sort, setSort] = useState(sorting);
  useEffect(() => {
    return;
  }, []);
  return [sort];
};

export default useSort;
