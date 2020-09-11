import React from 'react';

import EventsList from '../components/List/EventsList';
import Hotline from '../components/Hotline/Hotline';
import Header from '../components/Header/Header';
import CalendarSection from '../components/Calendar/CalendarSection';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';

import { updateLayout } from '../hooks/useLayout';

function Home(props) {
  updateLayout(props.title, props.bodyClass);
  return (
    <>
      <Header />
      <Hotline />
      <CalendarSection />
      <EventsList />
      <Footer />
      <Popup />
    </>
  );
}

export default Home;
