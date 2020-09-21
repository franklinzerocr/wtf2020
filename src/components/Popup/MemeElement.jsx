import React from 'react';
import { backendURL } from '../../globals';
import { Link } from 'react-router-dom';

function MemeElement(props) {
  let picSrc = '';
  if (props.meme.formats && 'small' in props.meme.formats) picSrc = props.meme.formats.small.url;
  else if (props.meme.formats) picSrc = props.meme.formats.thumbnail.url;
  else picSrc = props.meme.url;
  return (
    <div className='meme_single single_news col-md-6 align-self-center mb-2'>
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
