import React from 'react';
import { backendURL } from '../../globals';
import { Link } from 'react-router-dom';

function MemeElement(props) {
  return (
    <div className='single_news row'>
      <h5 className='title col-md-12 align-self-center'>
        {props.meme ? (
          <Link to={{ pathname: backendURL + props.meme.url }} target='_blank'>
            <img src={backendURL + props.meme.formats.small.url} alt='---' />
          </Link>
        ) : (
          <></>
        )}
      </h5>
    </div>
  );
}

export default MemeElement;

/* <li className='FeaturedImage'>
            FeaturedImage=
            <Link to={{ pathname: backendURL + event.FeaturedImage.url }} target='_blank'>
              <img src={backendURL + event.FeaturedImage.formats.small.url} alt={event.Keywords} />
            </Link>
          </li>
          <li className='Memes'>
            Memes=
            {event.Memes.map(meme => (
              <Link to={{ pathname: backendURL + meme.url }} target='_blank' key={meme.id}>
                <img src={backendURL + meme.formats.small.url} alt={event.Keywords} />
              </Link>
            ))}
          </li> */
