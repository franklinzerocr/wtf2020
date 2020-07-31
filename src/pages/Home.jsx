import React from 'react';

import Loader from '../components/Loader';
import Error from '../components/Error';
import EventsList from '../components/EventsList';

import useEvents from '../hooks/useEvents';
import EventTop from '../components/EventTop';
import { sortList } from '../utils';

function Home(props) {
  document.title = props.title;
  const events = useEvents();
  if (events.loading === true) {
    return <Loader dots={9} />;
  } else if (events.error) {
    return <Error error={events.error} />;
  } else if (!events.data.length) {
    return <div>Nothing</div>;
  } else {
    const firstEvent = sortList(events.data, 'DateInit');
    return (
      <>
        <EventTop event={firstEvent} />
        <EventsList events={events.data} />;
      </>
    );
  }
}

export default Home;
