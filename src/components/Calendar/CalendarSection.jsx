import React from 'react';
import Calendar from 'react-calendar';

import useCalendar from '../../hooks/useCalendar';

import { getDateTimeYMD } from '../../utils';
import CalendarList from './CalendarList';

import { filterEventsByCalendarDate } from '../../hooks/useEventList';

import 'react-calendar/dist/Calendar.css';
// import { updateCalendarList } from '../../hooks/useCalendarList';

function CalendarSection() {
  let [calendarState, setCalendar] = useCalendar();
  let selectedDate = getDateTimeYMD(calendarState);
  let filteredEvents = filterEventsByCalendarDate(selectedDate);
  return (
    <section className='calendar'>
      <CalendarList events={filteredEvents} />
      <Calendar onChange={setCalendar} value={calendarState} />
    </section>
  );
}

export default CalendarSection;
