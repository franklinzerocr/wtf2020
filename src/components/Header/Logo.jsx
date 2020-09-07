import React from 'react';

// import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logowtf.png';

function Logo() {
  return (
    // <Link to='/'>
    <img src={logoImage} alt='WTF2020 Logo' title='WTF2020' className='logo' />
    // </Link>
  );
}

export default Logo;
