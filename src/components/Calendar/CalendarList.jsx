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
        <EventElement event={false} i={i++} key={index} parent='calendar' />
      ))}
    </>
  );
}

function CalendarList(props) {
  return (
    <>
      <p className='text-center calendar_subtitle'>Selected day News</p>
      <div className='calendarList_inner_container'>
        <table className='calendarList table table-striped'>
          <tbody>{checkState(props.events)}</tbody>
        </table>
      </div>
    </>
  );
}

export default CalendarList;
