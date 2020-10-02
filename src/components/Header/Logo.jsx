import React from 'react';

import logoImage from '../../assets/images/logowtf.png';
import logoWTF from '../../assets/images/wtfjpg.jpg';

function Logo() {
  return (
    <>
      <img src={logoWTF} alt='WTF2020 Logo PNG' className='hidden-logo' />
      <img src={logoImage} alt='WTF2020 Logo' title='WTF2020' className='logo' />
    </>
  );
}

export default Logo;
