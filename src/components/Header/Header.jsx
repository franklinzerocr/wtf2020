import React from 'react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Rrss from './Rrss';
import Menu from './Menu';

import '../../assets/styles/Header.css';

function stickyMenu() {
  console.log(document.querySelector('.main-header'));
}

function Header() {
  return (
    <header className='main-header .container-fluid'>
      <div className='container'>
        <Logo />
        <SearchBar />
        <Rrss />
        <Menu />
        {stickyMenu()}
      </div>
    </header>
  );
}

export default Header;
