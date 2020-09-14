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
    </>
  );
}

function CalendarList(props) {
  console.log(props.events);
  return (
    <>
      <div className='calendarList_inner_container'>
        {props.events.length ? (
          <table className='calendarList table table-striped table-responsive w-100 d-block d-md-table'>
            <tbody>{checkState(props.events)}</tbody>
          </table>
        ) : (
          <p className='text-center'>NO EVENTS</p>
        )}
      </div>
    </>
  );
}

export default CalendarList;
