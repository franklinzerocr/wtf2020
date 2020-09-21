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

function backButton() {
  document.querySelector('.react-calendar__navigation__label').click();
  document.getElementById('calendarList').scrollIntoView({
    behavior: 'smooth',
  });
}

function CalendarList(props) {
  return (
    <>
      <div className='calendarList_inner_container'>
        {props.events.length ? (
          <table className='calendarList table table-striped table-responsive w-100 d-block d-md-table'>
            <tbody>{checkState(props.events)}</tbody>
          </table>
        ) : (
          <>
            <h4 className='text-center'>
              <span className='left-arrow'>
                <i className='fa fa-arrow-left'></i>
              </span>
              <span className='up-arrow'>
                <i className='fa fa-arrow-up'></i>
              </span>
            </h4>
            <p className='text-center'>Select an explosive Date on the Calendar</p>
            <h5 className='text-center'>{props.date} was a quiet day</h5>
          </>
        )}
        <div className='backButton text-center' onClick={backButton}>
          <span className='back-label'>Back</span>
          <span className='back-icon'>
            <i className='fa fa-arrow-left'></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default CalendarList;
