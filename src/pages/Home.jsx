import React from 'react';

// import EventsList from '../components/EventsList';
// import EventTop from '../components/EventTop';
import Header from '../components/Header';
import { updateLayout } from '../hooks/useLayout';

function Home(props) {
  updateLayout(props.title, props.bodyClass);
  // document.title = props.title;
  // document.querySelector();
  return (
    <>
      <Header />
      {/* <EventTop />
      <EventsList /> */}
    </>
  );
}

export default Home;
