import React from 'react';

import Loader from '../components/Loader';
import Error from '../components/Error';

import useEvents from '../hooks/useEvents';

function Home(props) {
  const events = useEvents();
  console.log(events);
  document.title = props.title;
  if (events.loading === true) {
    return <Loader dots={9} />;
  }
  if (events.error) {
    return <Error error={events.error} />;
  } else if (events.data.length) {
    return <div>{events.data[0].Title}</div>;
  } else {
    return <div>Nothing</div>;
  }
}

export default Home;
