import React from 'react';

import { backendURL } from '../globals';

function EventTop(props) {
  const event = props.event;
  console.log(event);
  return (
    <div className='EventTop'>
      <h1>{event.Title}</h1>
      <img src={backendURL + event.FeaturedImage.formats.medium.url} alt={event.Keywords} />
    </div>
  );
}

export default EventTop;
