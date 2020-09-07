import { useEffect, useState } from 'react';

let calendar = {},
  setCalendar;

export const useCalendar = () => {
  [calendar, setCalendar] = useState(new Date());
  useEffect(() => {
    return;
  }, []);
  return [calendar, setCalendar];
};

export default useCalendar;
