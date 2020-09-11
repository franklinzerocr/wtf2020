import React from 'react';

import Loader from '../Layout/Loader';
import Error from '../Layout/Error';
import { memeButton, newsButton } from '../List/EventElement';

import useEventTop from '../../hooks/useEventTop';

import '../../assets/styles/HotLine.css';

function checkState(event) {
  if (event.loading === true) return <Loader dots={3} />;
  else if (event.error) return <Error error={event.error} />;
  else if (!event.data || !event.data.length) return <Error error='EMPTY' />;
  else {
    event = event.data[0];
    return (
      <>
        <p className='eventTop-title'>{event.Title}</p>
        <p className='eventTop-meta'>
          {event.Location}
          &nbsp;&nbsp;&nbsp;
          {event.DateInit}
          <br />
          <span className='actions_container'>
            {memeButton(event)}&nbsp;/&nbsp;{newsButton(event)}
          </span>
        </p>
      </>
    );
  }
}

function EventTop(props) {
  let [event] = useEventTop();
  return (
    <section className='eventTop'>
      <div className='container'>
        <div className='title-container row'>
          <div className='container align-self-center'>{checkState(event)}</div>
        </div>
        <h2 className='slogan'>Nothing was ever the same</h2>
      </div>
    </section>
  );
}

export default EventTop;
