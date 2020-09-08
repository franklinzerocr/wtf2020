import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul className='menu'>
        <li className='hidden'>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/donate'>Donate</Link>
        </li>
        <li className='hidden'>
          <Link to='/privacy'>Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
