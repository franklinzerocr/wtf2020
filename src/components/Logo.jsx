import React from 'react';

import logoImage from '../assets/images/logowtf.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/'>
      <img src={logoImage} alt='WTF2020 Logo' title='WTF2020' />
    </Link>
  );
}

export default Logo;
