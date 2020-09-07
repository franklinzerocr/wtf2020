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
      <h1 className='text-center'>Calendar</h1>
      <div className='container '>
        <div className='row'>
          <div className='calendarList-container col-md-6'>
            <CalendarList events={filteredEvents} />
          </div>
          <div className='calendar-container col-md-6'>
            <Calendar onChange={setCalendar} value={calendarState} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarSection;
