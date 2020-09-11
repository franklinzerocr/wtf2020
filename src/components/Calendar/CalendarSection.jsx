import React from 'react';
import Calendar from 'react-calendar';

import useCalendar from '../../hooks/useCalendar';

import { getDateTimeYMD, getMonthName } from '../../utils';
import CalendarList from './CalendarList';

import { filterEventsByCalendarDate, getFeaturedEvents } from '../../hooks/useEventList';

import 'react-calendar/dist/Calendar.css';
import '../../assets/styles/Calendar.css';
import { backendURL } from '../../globals';

export function changeBackgroundOfButtons() {
  const reactCalendar = document.querySelector('.react-calendar');
  const featuredEvents = getFeaturedEvents();

  if (reactCalendar.querySelector('.react-calendar__year-view'))
    for (let button of document.querySelectorAll('.react-calendar__year-view .react-calendar__tile')) {
      let calendarMonth = button.querySelector('abbr').getAttribute('aria-label');

      for (let event of featuredEvents) {
        if (getMonthName(event.DateInit) === calendarMonth && event.FeaturedImage) {
          button.style.backgroundImage = "url('" + backendURL + event.FeaturedImage.formats.small.url + "')";
          button.style.backgroundSize = 'cover';
        }
      }
    }
  else if (reactCalendar.querySelector('.react-calendar__decade-view') || reactCalendar.querySelector('.react-calendar__century-view'))
    for (let button of document.querySelectorAll('.react-calendar__decade-view .react-calendar__tile, .react-calendar__century-view .react-calendar__tile')) {
      let abbr = document.createElement('abbr');
      abbr.innerHTML = button.innerHTML;
      button.innerHTML = '';
      button.appendChild(abbr);
    }
}

function CalendarSection() {
  let [calendarState, updateCalendar] = useCalendar();
  let selectedDate = getDateTimeYMD(calendarState);
  let filteredEvents = filterEventsByCalendarDate(selectedDate);
  return (
    <section id='calendarList' className='calendar'>
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
              <Calendar
                onChange={updateCalendar}
                value={calendarState}
                onViewChange={() => {
                  changeBackgroundOfButtons();
                }}
                onActiveStartDateChange={() => {
                  changeBackgroundOfButtons();
                }}
                defaultView='year'
              />
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
