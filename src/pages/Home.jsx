import React from 'react';

import EventsList from '../components/EventsList';
import EventTop from '../components/EventTop';

function Home(props) {
  document.title = props.title;
  return (
    <>
      <EventTop />
      <EventsList />
    </>
  );
}

export default Home;
