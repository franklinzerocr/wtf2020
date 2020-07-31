import React from 'react';

import { backendURL } from '../globals';
import useNews from '../hooks/useNews';
import Loader from './Loader';

function EventTop(props) {
  const event = props.event;
  const [news, getNews] = useNews();
  if (news.loading) {
    return <Loader dots={3} />;
  } else
    return (
      <div className='EventTop'>
        <button onClick={() => getNews(event)}>Get News From {event.Title}</button>
        <h1>{event.Title}</h1>
        <img src={backendURL + event.FeaturedImage.formats.medium.url} alt={event.Keywords} />
      </div>
    );
}

export default EventTop;
