import React from 'react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Rrss from './Rrss';
import Menu from './Menu';

import '../../assets/styles/Header.css';

function Header() {
  return (
    <header className='main-header .container-fluid'>
      <div className='container'>
        <Logo />
        <SearchBar />
        <Rrss />
        <Menu />
      </div>
    </header>
  );
}

export default Header;
