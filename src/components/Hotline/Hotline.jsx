import React from 'react';

import useEventTop from '../../hooks/useEventTop';

import '../../assets/styles/HotLine.css';
import EventTop from './EventTop';
import { useHistory } from 'react-router-dom';

function Hotline(props) {
  let history = useHistory();
  let [event] = useEventTop([props.eventTitle, history]);
  return (
    <section id='hotline' className='eventTop'>
      <div className='container'>
        <div className='title-container row'>
          <div className='container align-self-center'>
            <EventTop event={event} />
          </div>
        </div>
        <h2 className='slogan'>Nothing was ever the same</h2>
      </div>
    </section>
  );
}

export default Hotline;
