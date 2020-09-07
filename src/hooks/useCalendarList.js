import { useEffect, useState } from 'react';

let calendarList = {},
  setCalendarList;

export function updateCalendarList(filteredEvents) {
  setCalendarList(filteredEvents);
}

export const useCalendarList = filteredEvents => {
  [calendarList, setCalendarList] = useState(filteredEvents);
  useEffect(() => {
    return;
  }, []);
  return [calendarList, setCalendarList];
};

export default useCalendarList;
