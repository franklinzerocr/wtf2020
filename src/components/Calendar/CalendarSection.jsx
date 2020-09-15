import React from 'react';
import Calendar from 'react-calendar';

import useCalendar from '../../hooks/useCalendar';

import { getDateTimeYMD, getMonthName, sleep, getCalendarDate, findPos } from '../../utils';
import CalendarList from './CalendarList';

import { filterEventsByCalendarDate, getFeaturedEvents, getDaysWithEvents } from '../../hooks/useEventList';

import 'react-calendar/dist/Calendar.css';
import '../../assets/styles/Calendar.css';
import { backendURL } from '../../globals';

export function changeBackgroundOfButtons() {
  const reactCalendar = document.querySelector('.react-calendar');
  const featuredEvents = getFeaturedEvents();
  const daysWithEvents = getDaysWithEvents();

  if (reactCalendar)
    if (reactCalendar.querySelector('.react-calendar__year-view'))
      for (let button of document.querySelectorAll('.react-calendar__year-view .react-calendar__tile')) {
        let calendarMonth = button.querySelector('abbr').getAttribute('aria-label');

        for (let event of featuredEvents) {
          if (getMonthName(event.DateInit) === calendarMonth && event.FeaturedImage) {
            button.style.backgroundImage = "url('" + backendURL + event.FeaturedImage.formats.small.url + "') ";
            button.style.backgroundSize = 'cover';
            button.style.backgroundPosition = 'center 0px';
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
    else if (reactCalendar.querySelector('.react-calendar__month-view ')) {
      for (let button of document.querySelectorAll('.react-calendar__month-view .react-calendar__tile')) {
        let dayFound = daysWithEvents.filter(function (itm) {
          return itm === button.querySelector('abbr').getAttribute('aria-label');
        });
        if (dayFound && dayFound.length > 0) button.setAttribute('has-event', 'true');

        if (!button.getAttribute('watched')) {
          button.setAttribute('watched', 'watched');
          let observer = new MutationObserver(async function (e) {
            if (dayFound && dayFound.length > 0) {
              button.setAttribute('has-event', 'true');
            }

            var event = document.createEvent('HTMLEvents');
            event.initEvent('click', true, false);
            await sleep(10000);
            document.querySelector('body').dispatchEvent(event);
            console.log('click');
          });

          observer.observe(button, {
            attributes: true,
            attributeFilter: ['class'],
            childList: false,
            characterData: false,
          });
        }
      }
    }
}

function goToCalendarList() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (width <= 768) {
    window.scroll({ left: 0, top: findPos(document.querySelector('.calendarList_inner_container'))[0] - 150, behavior: 'smooth' });
  }
}

function CalendarSection() {
  let [calendarState, setCalendar] = useCalendar();
  let selectedDate = null;
  if (calendarState) selectedDate = getDateTimeYMD(calendarState);
  let filteredEvents = filterEventsByCalendarDate(selectedDate);
  selectedDate = getCalendarDate(selectedDate);
  return (
    <section id='calendarList' className='calendar'>
      <div className='container '>
        <div className='row'>
          <div className='calendar-container col-md-7'>
            <h1 className='text-center'>
              Pick a Month <span color='orange'>»</span> Pick a Date
            </h1>
            <p className='text-center'>And look for days with explosive events!</p>
            <div className='calendar_inner_container'>
              <div className='spring spring1' />
              <div className='spring spring2' />
              <div className='spring spring3' />
              <div className='spring spring4' />
              <div className='spring spring5' />
              <div className='spring spring6' />
              <div className='spring spring7' />
              <Calendar
                value={calendarState}
                onChange={value => {
                  setCalendar(value);
                  changeBackgroundOfButtons();
                  goToCalendarList();
                }}
                onViewChange={() => {
                  changeBackgroundOfButtons();
                }}
                onActiveStartDateChange={() => {
                  changeBackgroundOfButtons();
                }}
                onClickDay={() => {
                  changeBackgroundOfButtons();
                }}
                defaultView='year'
                minDetail='year'
                minDate={new Date('2020-01-02')}
                locale='en-US'
              />
            </div>
          </div>
          <div className='calendarList-container col-md-5'>
            <CalendarList events={filteredEvents} date={selectedDate} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarSection;
