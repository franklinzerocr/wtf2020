import React from 'react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Rrss from './Rrss';
import Menu from './Menu';

import '../assets/styles/header.css';

function Header() {
  return (
    <header>
      <Logo />
      <SearchBar />
      <Rrss />
      <Menu />
    </header>
  );
}

export default Header;
