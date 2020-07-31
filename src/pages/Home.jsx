import React from 'react';

import Loader from '../components/Loader';
import Error from '../components/Error';
import EventsList from '../components/EventsList';
import EventTop from '../components/EventTop';

import useEvents from '../hooks/useEvents';

import { sortList } from '../utils';

function Home(props) {
  document.title = props.title;
  const [events, getEvents] = useEvents();
  if (events.loading === true) {
    return (
      <>
        <Loader dots={9} />;{' '}
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
    const firstEvent = sortList(events.data, 'DateInit');
    return (
      <>
        <button onClick={getEvents}>hola</button>
        <EventTop event={firstEvent} />
        <EventsList events={events.data} />;
      </>
    );
  }
}

export default Home;
