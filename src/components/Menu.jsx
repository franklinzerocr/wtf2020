import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul>
      <li>
        <Link to='/donate'>Donate</Link>{' '}
      </li>
    </ul>
  );
}

export default Menu;
