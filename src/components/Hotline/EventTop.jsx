import React from 'react';

import Loader from '../Layout/Loader';
import Error from '../Layout/Error';
import { memeButton, newsButton } from '../List/EventElement';

import '../../assets/styles/HotLine.css';
import { setHotlineHeight } from '../Header/Header';
import { backendURL } from '../../globals';

function EventTop(props) {
  let event = props.event;
  if (event.loading === true) return <Loader dots={3} />;
  else if (event.error) return <Error error={event.error} />;
  else if (!event.data) return <Error error='EMPTY' />;
  else {
    event = event.data;
    let featuredImageThumb = event.FeaturedImage.formats.thumbnail.url;
    setHotlineHeight();

    return (
      <>
        <p className='eventTop-title'>
          <span className='eventTop-span'>{event.Title}</span>
          <span className='eventTop-thumbnail-container'>
            <img src={backendURL + featuredImageThumb} className='eventTop-thumbnail' alt={event.Title} title={event.Title} />
            <img src={backendURL + featuredImageThumb} className='eventTop-zoom' alt={event.Title} />
          </span>
        </p>
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
