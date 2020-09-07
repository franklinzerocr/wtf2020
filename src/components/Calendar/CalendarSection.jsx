import React from 'react';
import Calendar from 'react-calendar';

import useCalendar from '../../hooks/useCalendar';

import { getDateTimeYMD } from '../../utils';
import CalendarList from './CalendarList';

import { filterEventsByCalendarDate } from '../../hooks/useEventList';

import 'react-calendar/dist/Calendar.css';
import '../../assets/styles/Calendar.css';

function CalendarSection() {
  let [calendarState, setCalendar] = useCalendar();
  let selectedDate = getDateTimeYMD(calendarState);
  let filteredEvents = filterEventsByCalendarDate(selectedDate);
  return (
    <section className='calendar'>
      <h1>Calendar</h1>
      <CalendarList events={filteredEvents} />
      <Calendar onChange={setCalendar} value={calendarState} />
    </section>
  );
}

export default CalendarSection;
