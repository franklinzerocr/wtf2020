import React from 'react';

import EventsList from '../components/List/EventsList';
// import EventTop from '../components/Hotline/EventTop';
// import Header from '../components/Header/Header';

import { updateLayout } from '../hooks/useLayout';
// import CalendarSection from '../components/Calendar/CalendarSection';

function Home(props) {
  updateLayout(props.title, props.bodyClass);
  return (
    <>
      {/* <Header /> */}
      {/* <EventTop /> */}
      {/* <CalendarSection /> */}
      <EventsList />
    </>
  );
}

export default Home;
