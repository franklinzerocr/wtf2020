import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li className='homeLink'>
          <Link to='/'>WTF 2020</Link>
        </li>
        <li className='donateLink'>
          <Link to='/Donate'>Donate</Link>
        </li>
        <li className='privacyLink'>
          <Link to='/Privacy'>Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
