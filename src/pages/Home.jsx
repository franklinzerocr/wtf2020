import React from 'react';

import EventsList from '../components/List/EventsList';
import EventTop from '../components/Hotline/EventTop';
import Header from '../components/Header/Header';
import CalendarSection from '../components/Calendar/CalendarSection';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Layout/Popup';

import { updateLayout } from '../hooks/useLayout';

function Home(props) {
  updateLayout(props.title, props.bodyClass);
  return (
    <>
      <Header />
      <EventTop />
      <CalendarSection />
      <EventsList />
      <Footer />
      <Popup />
    </>
  );
}

export default Home;
