import React from 'react';
import { Link } from 'react-router-dom';

function Rrss() {
  return (
    <div className='rrss'>
      <Link to={{ pathname: 'https://facebook.com/WTF2020help' }} target='_blank'>
        <i className='fa fa-facebook'></i>
      </Link>
      <Link to={{ pathname: 'https://instagram.com/WTF2020help' }} target='_blank'>
        <i className='fa fa-instagram'></i>
      </Link>
      <Link to={{ pathname: 'https://twitter.com/WTF2020help' }} target='_blank'>
        <i className='fa fa-twitter'></i>
      </Link>
    </div>
  );
}

export default Rrss;
