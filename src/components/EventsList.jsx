import React from 'react';

import EventElement from './EventElement';

function EventsList(props) {
  let events = props.events;
  return (
    <ul className='EventsList'>
      {events.map(event => (
        <EventElement event={event} key={event.id} />
      ))}
    </ul>
  );
}

export default EventsList;
