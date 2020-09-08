import React from 'react';
import { Link } from 'react-router-dom';

function Rrss() {
  return (
    <div className='rrss'>
      <Link to={{ pathname: 'https://roisdigital.com' }} target='_blank'>
        <i className='fa fa-globe'></i>
      </Link>
      <Link to={{ pathname: 'https://facebook.com/roisdigital' }} target='_blank'>
        <i className='fa fa-facebook'></i>
      </Link>
      <Link to={{ pathname: 'https://instagram.com/roisdigital' }} target='_blank'>
        <i className='fa fa-instagram'></i>
      </Link>
      <Link to={{ pathname: 'https://twitter.com/roisdigital' }} target='_blank'>
        <i className='fa fa-twitter'></i>
      </Link>
      <Link to={{ pathname: 'https://t.me/roisdigital' }} target='_blank'>
        <i className='fa fa-telegram'></i>
      </Link>
    </div>
  );
}

export default Rrss;
