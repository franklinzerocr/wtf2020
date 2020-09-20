import React from 'react';
import { backendURL } from '../../globals';
import { Link } from 'react-router-dom';

function MemeElement(props) {
  let picSrc = '';
  console.log(props.meme);
  if (props.meme.formats && 'small' in props.meme.formats) picSrc = props.meme.formats.small.url;
  else if (props.meme.formats) picSrc = props.meme.formats.thumbnail.url;
  else picSrc = props.meme.url;
  return (
    <div className='meme_single col-md-6 align-self-center'>
      {props.meme ? (
        <Link to={{ pathname: backendURL + props.meme.url }} target='_blank'>
          <img src={backendURL + picSrc} alt='---' />
        </Link>
      ) : (
        <></>
      )}
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
