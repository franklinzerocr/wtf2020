import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul className='menu'>
      <li>
        <Link to='/donate'>Donate</Link>{' '}
      </li>
    </ul>
  );
}

export default Menu;
