import React from 'react';

import EventElement from './EventElement';
import Loader from './Loader';
import Error from './Error';
import useEventList from '../hooks/useEventList';

function EventsList(props) {
  const [events] = useEventList();
  if (events.loading === true) {
    return (
      <>
        <Loader dots={9} />
      </>
    );
  } else if (events.error) {
    return (
      <>
        <Error error={events.error} />
      </>
    );
  } else if (!events.data || !events.data.length) {
    return (
      <>
        <Error error='EMPTY' />
      </>
    );
  } else {
    return (
      <ul className='EventsList'>
        {events.data.map(event => (
          <EventElement event={event} key={event.id} />
        ))}
      </ul>
    );
  }
}

export default EventsList;
