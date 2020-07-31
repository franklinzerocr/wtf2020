import React from 'react';
import { Link } from 'react-router-dom';

import { backendURL } from '../globals';

import '../assets/styles/EventElement.css';

function EventElement(props) {
  const event = props.event;
  return (
    <li key={event.id}>
      {event.Title}
      <ul className='EventStructure'>
        <li className='Sinopsis'>Title= {event.Sinopsis}</li>
        <li className='DateInit'>Date= {event.DateInit}</li>
        <li className='Location'>Location= {event.Location}</li>
        <li className='Keywords'>Keywords= {event.Keywords}</li>
        <li className='FeaturedImagen'>
          FeaturedImage=
          <Link to={{ pathname: backendURL + event.FeaturedImage.url }} target='_blank'>
            <img src={backendURL + event.FeaturedImage.formats.small.url} alt={event.Keywords} />
          </Link>
        </li>
        <li className='Memes'>
          Memes=
          {event.Memes.map(meme => (
            <Link to={{ pathname: backendURL + meme.url }} target='_blank'>
              <img src={backendURL + meme.formats.small.url} alt={event.Keywords} />
            </Link>
          ))}
        </li>
      </ul>
    </li>
  );
}

export default EventElement;
