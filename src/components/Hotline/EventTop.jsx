import React from 'react';

import Loader from '../Layout/Loader';
import Error from '../Layout/Error';
import { memeButton, newsButton } from '../List/EventElement';

import '../../assets/styles/HotLine.css';
import { setHotlineHeight } from '../Header/Header';

function EventTop(props) {
  let event = props.event;
  if (event.loading === true) return <Loader dots={3} />;
  else if (event.error) return <Error error={event.error} />;
  else if (!event.data) return <Error error='EMPTY' />;
  else {
    event = event.data;
    setHotlineHeight();
    return (
      <>
        <p className='eventTop-title'>{event.Title}</p>
        <p className='eventTop-meta'>
          {event.DateInit}
          &nbsp;&nbsp;&nbsp;
          {event.Location}
          <br />
          <span className='actions_container'>
            {memeButton(event)}&nbsp;/&nbsp;{newsButton(event)}
          </span>
        </p>
      </>
    );
  }
}

export default EventTop;
