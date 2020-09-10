import React from 'react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Rrss from './Rrss';
import Menu from './Menu';

import '../../assets/styles/Header.css';

var flagStickyMenu = false;

function stickyMenu() {
  if (!flagStickyMenu && document.querySelector('body.Home'))
    window.addEventListener('scroll', function (event) {
      flagStickyMenu = true;
      let sectionEventTop = document.querySelector('section.eventTop');
      let headerElement = document.querySelector('header');
      if (!sectionEventTop || !headerElement) return;
      let limitOffSet = (sectionEventTop.offsetHeight * 55) / 100;
      if (window.pageYOffset > sectionEventTop.offsetHeight) {
        headerElement.style.position = 'fixed';
        headerElement.style.top = '0px';
        headerElement.classList.add('sticky-menu');
        headerElement.classList.add('fixed-menu');
        headerElement.classList.remove('static-menu');
        headerElement.classList.remove('absolute-menu');
      } else if (window.pageYOffset >= limitOffSet) {
        headerElement.style.position = 'absolute';
        headerElement.style.top = sectionEventTop.offsetHeight + 'px';
        headerElement.classList.add('sticky-menu');
        headerElement.classList.add('absolute-menu');
        headerElement.classList.remove('fixed-menu');
        headerElement.classList.remove('static-menu');
      } else {
        headerElement.style.position = 'absolute';
        headerElement.style.top = '0px';
        headerElement.classList.add('static-menu');
        headerElement.classList.remove('sticky-menu');
        headerElement.classList.remove('absolute-menu');
        headerElement.classList.remove('fixed-menu');
      }
    });
}

function Header(props) {
  return (
    <>
      <header className='main-header .container-fluid'>
        <div className='container'>
          <Logo />
          <Rrss />
          <SearchBar />
          <Menu />
        </div>
      </header>
      {stickyMenu()}
    </>
  );
}

export default Header;
