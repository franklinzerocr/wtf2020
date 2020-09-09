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
      <h1 className='text-center'>PICK A DATE</h1>
      <div className='container '>
        <div className='row'>
          <div className='calendar-container col-md-7'>
            <div className='calendar_inner_container'>
              <div className='spring spring1' />
              <div className='spring spring2' />
              <div className='spring spring3' />
              <div className='spring spring4' />
              <div className='spring spring5' />
              <div className='spring spring6' />
              <div className='spring spring7' />
              <Calendar onChange={setCalendar} value={calendarState} />
            </div>
          </div>
          <div className='calendarList-container col-md-5'>
            <CalendarList events={filteredEvents} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarSection;
