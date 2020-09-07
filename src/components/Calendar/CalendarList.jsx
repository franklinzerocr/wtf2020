import React from 'react';
import CalendarEventElement from './CalendarEventElement';

function checkState(calendarList) {
  let dif = 3 - calendarList.length;
  let difArray = [];
  for (let i = 0; i < dif; i++) {
    difArray.push(i + calendarList.length);
  }
  let index = 1;
  return (
    <>
      {calendarList.map(event => (
        <CalendarEventElement event={'event'} i={index++} key={event.id} />
      ))}
      {difArray.map(i => (
        <CalendarEventElement event={null} i={index++} key={i} />
      ))}
    </>
  );
}

function CalendarList(props) {
  return (
    <div className='calendarList-container '>
      <h2>News of Selected Day</h2>
      <div className='calendarList-box'>
        <ul className='calendarList'>{checkState(props.events)}</ul>
      </div>
    </div>
  );
}

export default CalendarList;
