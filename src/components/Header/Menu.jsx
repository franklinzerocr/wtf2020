import React from 'react';
import { Link } from 'react-router-dom';
import { updatePopup } from '../../hooks/usePopup';
import Donate from '../Popup/Donate';

function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li className='privacyLink'>
          <Link to='/Privacy'>Privacy Policy</Link>
        </li>
        <li className='homeLink'>
          <Link to='/'>WTF 2020</Link>
        </li>
        <li className='donateLink'>
          <button
            className='donate'
            onClick={() => {
              updatePopup(true, <Donate />);
            }}
          >
            Donate
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
