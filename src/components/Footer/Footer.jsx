import React from 'react';

import { Link } from 'react-router-dom';
import Rrss from '../Header/Rrss';
import Menu from '../Header/Menu';
import RrssRois from './RrssRois';

import logoImage from '../../assets/images/logowtf.png';
import roisLogo from '../../assets/images/roislogo.png';
import '../../assets/styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col-md-4 text-center'>
            <Link to='/'>
              <img src={logoImage} alt='WTF2020 Logo' title='WTF2020' className='footer-logo' />
            </Link>
            <Rrss />
          </div>
          <div className='col-md-4 text-center'>
            <p>Designed & Developed by</p>
            <Link to={{ pathname: 'https://roisdigital.com' }} target='_blank'>
              <img src={roisLogo} alt='ROIS Logo' title='ROIS Digital Team' className='footer-logo' />
            </Link>
            <RrssRois />
          </div>
          <div className='col-md-4 text-center'>
            <Menu />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
