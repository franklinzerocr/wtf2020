import React from 'react';

import { backendURL } from '../globals';
import useNews from '../hooks/useNews';
import Loader from './Loader';
import Error from './Error';
import useEventTop from '../hooks/useEventTop';

function EventTop(props) {
  let [event] = useEventTop();
  const [news, getNews] = useNews();
  if (event.loading === true || news.loading) {
    return (
      <>
        <Loader dots={3} />
      </>
    );
  } else if (event.error) {
    return (
      <>
        <Error error={event.error} />
      </>
    );
  } else if (!event.data || !event.data.length) {
    return (
      <>
        <Error error='EMPTY' />
      </>
    );
  } else {
    event = event.data[0];
    return (
      <div className='EventTop'>
        <button onClick={() => getNews(event)}>Get News From {event.Title}</button>
        <h1>{event.Title}</h1>
        <img src={backendURL + event.FeaturedImage.formats.medium.url} alt={event.Keywords} />
      </div>
    );
  }
}

export default EventTop;
