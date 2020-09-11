import { useEffect, useState } from 'react';

import { changeBackgroundOfButtons } from '../components/Calendar/CalendarSection';

let calendar = {},
  setCalendar;

export const useCalendar = () => {
  [calendar, setCalendar] = useState(new Date());
  useEffect(() => {
    changeBackgroundOfButtons();
    return;
  }, []);
  return [calendar, setCalendar];
};

export default useCalendar;
