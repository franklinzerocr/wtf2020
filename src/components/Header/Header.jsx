import React from 'react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Rrss from './Rrss';
import Menu from './Menu';

import '../../assets/styles/Header.css';
import useSearchBar from '../../hooks/useSearchBar';
import { Link } from 'react-router-dom';

var flagStickyMenu = false;

export function setHotlineHeight() {
  setTimeout(function () {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width <= 768) {
      let hotLine = document.querySelector('#hotline');
      let titleContainer = document.querySelector('#hotline .title-container');
      let hotlineHeight = titleContainer.offsetTop + titleContainer.offsetHeight + 50;
      hotLine.style.height = hotlineHeight + 'px';
    }

    stickyMenuAdjust();
  }, 0);
}

function stickyMenuAdjust() {
  setTimeout(function () {
    let sectionEventTop = document.querySelector('section.eventTop');
    let headerElementStatic = document.querySelector('header.static');
    let headerElementSticky = document.querySelector('header.sticky');
    if (!headerElementSticky) return;

    headerElementSticky.style.display = 'block';
    if (!sectionEventTop || !headerElementStatic) return;
    let limitOffSet = (sectionEventTop.offsetHeight * 0) / 100;
    if (window.pageYOffset > sectionEventTop.offsetHeight) {
      headerElementSticky.style.position = 'fixed';
      headerElementSticky.style.top = '0px';
      headerElementSticky.classList.add('sticky-menu');
      headerElementSticky.classList.add('fixed-menu');
      headerElementSticky.classList.remove('static-menu');
      headerElementSticky.classList.remove('absolute-menu');
    } else if (window.pageYOffset >= limitOffSet) {
      headerElementSticky.style.display = 'block';
      headerElementSticky.style.position = 'absolute';
      headerElementSticky.style.top = sectionEventTop.offsetHeight + 'px';
      headerElementSticky.classList.add('sticky-menu');
      headerElementSticky.classList.add('absolute-menu');
      headerElementSticky.classList.remove('fixed-menu');
      headerElementSticky.classList.remove('static-menu');
    }
  }, 0);
}

function stickyMenu() {
  // PRIVACY || DONATE
  setTimeout(function () {
    if (document.querySelector('body.Privacy') || document.querySelector('body.Donate')) {
      let headerElement = document.querySelector('header.main-header.static');
      headerElement.style.display = 'none';
      headerElement = document.querySelector('header.main-header.sticky');
      headerElement.style.display = 'block';
      headerElement.style.position = 'fixed';
      headerElement.style.top = '0px';
      headerElement.classList.add('sticky-menu');
      headerElement.classList.add('fixed-menu');
      headerElement.classList.remove('static-menu');
      headerElement.classList.remove('absolute-menu');
    } else {
      setHotlineHeight();
    }
  }, 0);

  if (!flagStickyMenu && document.querySelector('body.Home'))
    window.addEventListener('scroll', function (event) {
      flagStickyMenu = true;
      stickyMenuAdjust();
    });
}

function Header(props) {
  let [input, updateInput] = useSearchBar();
  return (
    <>
      <header className='main-header .container-fluid static'>
        <div className='container'>
          <Logo />
          <Rrss />
          <SearchBar input={input} updateInput={updateInput} />
          <Menu />
        </div>
      </header>
      <header className='main-header .container-fluid sticky'>
        <div className='container'>
          <Link to='/'>
            <Logo />
          </Link>
          <Rrss />
          <SearchBar input={input} updateInput={updateInput} />
          <Menu />
        </div>
      </header>
      {stickyMenu()}
    </>
  );
}

export default Header;
