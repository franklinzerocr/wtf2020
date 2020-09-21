import React from 'react';

import { Link } from 'react-router-dom';
import Rrss from '../Header/Rrss';
import Menu from '../Header/Menu';
import RrssRois from './RrssRois';

import logoImage from '../../assets/images/logowtf.png';
import roisLogo from '../../assets/images/roislogo.png';
import '../../assets/styles/Footer.css';

function footerSwap() {
  setTimeout(function () {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width <= 768) {
      document.querySelector('.footer-row').appendChild(document.querySelector('.wtf2020logo'));
      document.querySelector('.footer-row').appendChild(document.querySelector('.menu-footer'));
    }
  }, 0);
}

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row footer-row'>
          <div className='col-md-4 text-center wtf2020logo'>
            <Link to='/'>
              <img src={logoImage} alt='WTF2020 Logo' title='WTF2020' className='footer-logo' />
            </Link>
            <Rrss />
          </div>
          <div className='col-md-4 text-center roisdigital'>
            <p>Designed & Developed by</p>
            <Link to={{ pathname: 'https://roisdigital.com' }} target='_blank'>
              <img src={roisLogo} alt='ROIS Logo' title='ROIS Digital Team' className='footer-logo' />
            </Link>
            <RrssRois />
            <p>
              Any suggestion, issue or message. send it to <span background='orange'>franklin@roisdigital.com</span>
            </p>
          </div>
          <div className='col-md-4 text-center menu-footer'>
            <Menu />
          </div>
        </div>
      </div>
      {footerSwap()}
    </footer>
  );
}

export default Footer;
