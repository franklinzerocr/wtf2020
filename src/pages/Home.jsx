import React from 'react';

import EventsList from '../components/List/EventsList';
import Hotline from '../components/Hotline/Hotline';
import Header from '../components/Header/Header';
import CalendarSection from '../components/Calendar/CalendarSection';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';

import { updateLayout } from '../hooks/useLayout';
import { updatePopup } from '../hooks/usePopup';
import Donate from '../components/Popup/Donate';
import PrivacyCheck from '../components/Layout/PrivacyCheck';

function openDonate() {
  setTimeout(function () {
    updatePopup(true, <Donate />);
  }, 180000);
}

function Home(props) {
  updateLayout(props.title, props.bodyClass);
  return (
    <>
      <Header />
      <Hotline eventTitle={props.eventTitle} />
      <CalendarSection />
      <EventsList />
      <Footer />
      <Popup />
      <PrivacyCheck />
      {openDonate()}
    </>
  );
}

export default Home;
