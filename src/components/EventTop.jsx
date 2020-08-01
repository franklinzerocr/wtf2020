import React from 'react';

import { backendURL } from '../globals';
import { getNews } from '../externalApis/news';
import Loader from './Loader';
import Error from './Error';
import useEventTop, { loaderTop } from '../hooks/useEventTop';

function EventTop(props) {
  let [event] = useEventTop();
  if (event.loading === true) {
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
        <button
          onClick={async () => {
            let list = await getNews(event, loaderTop);
            console.log(list);
          }}
        >
          Get News From {event.Title}
        </button>
        <h1>{event.Title}</h1>
        <img src={backendURL + event.FeaturedImage.formats.medium.url} alt={event.Keywords} />
      </div>
    );
  }
}

export default EventTop;
