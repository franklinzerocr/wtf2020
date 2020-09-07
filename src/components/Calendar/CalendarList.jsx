import React from 'react';
import EventElement from '../List/EventElement';

function checkState(calendarList) {
  let dif = 3 - calendarList.length;
  let difArray = [];
  for (let i = 0; i < dif; i++) {
    difArray.push(i + calendarList.length);
  }
  let i = 1;
  return (
    <>
      {calendarList.map(event => (
        <EventElement event={event} i={i++} key={event.id} parent='calendar' />
      ))}
      {difArray.map(index => (
        <EventElement event={null} i={i++} key={index} parent='calendar' />
      ))}
    </>
  );
}

function CalendarList(props) {
  return (
    <div className='calendarList-container '>
      <h2>News of that Day</h2>
      <table className='calendarList table'>{checkState(props.events)}</table>
    </div>
  );
}

export default CalendarList;
