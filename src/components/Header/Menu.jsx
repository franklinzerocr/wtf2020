import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li className='hidden'>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Donate'>Donate</Link>
        </li>
        <li className='hidden'>
          <Link to='/Privacy'>Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
