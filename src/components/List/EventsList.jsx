import React from 'react';

// import Loader from '../Layout/Loader';
// import Error from '../Layout/Error';
// import EventElement from '../List/EventElement';
import useEventList from '../../hooks/useEventList';

function EventsList(props) {
  /* const [events] =  */ useEventList();
  // let i = 0;
  return <></>;
  /* if (events.loading === true) {
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
          <EventElement event={event} key={event.id} i={i++} />
        ))}
      </ul>
    );
  } */
}

export default EventsList;
