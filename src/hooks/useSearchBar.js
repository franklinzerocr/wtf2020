import { useEffect, useState } from 'react';
import { updateFilteredEvents } from './useFilteredEvents';
import { getEventList } from './useEventList';
import { getMonthName } from '../utils';

let searchBar = {},
  setSearchBar;

export const updateSearchBar = async input => {
  await setSearchBar(input);

  let searchInput = input.split(/,| |-|\/|;/);
  //   console.log(searchInput);
  let events = Object.assign({}, getEventList());
  if (input && events && !events.loading && !events.error && events.data.length > 0) {
    events.data = events.data.filter(function (itm) {
      let found = false;
      for (let word of [...searchInput]) {
        if (word === '') {
          continue;
        }
        if (itm.Title.toUpperCase().includes(word.toUpperCase())) {
          found = true;
        } else if (itm.Keywords.toUpperCase().includes(word.toUpperCase())) {
          found = true;
        } else if (itm.Location.toUpperCase().includes(word.toUpperCase())) {
          found = true;
        } else if (itm.DateInit.includes(word.toUpperCase())) {
          found = true;
        } else if (getMonthName(itm.DateInit).toUpperCase().includes(word.toUpperCase())) {
          found = true;
        } else found = false;
        if (!found) break;
      }
      return found;
    });
  }
  updateFilteredEvents(events);
};

export const getSearchBar = () => {
  return searchBar;
};

export const useSearchBar = () => {
  [searchBar, setSearchBar] = useState('');
  useEffect(() => {
    return;
  }, []);
  return [searchBar, updateSearchBar];
};

export default useSearchBar;
