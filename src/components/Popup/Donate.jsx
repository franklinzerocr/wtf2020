import React from 'react';
import { paypalMe, tippingLN, btcAddress, roisdigital } from '../../globals';
import { Link } from 'react-router-dom';
import paypalButton from '../../assets/images/paypal.png';
import bitcoinButton from '../../assets/images/bitcoin_PNG48.png';
import bitcoinAddress from '../../assets/images/btcaddress.png';
import lnButton from '../../assets/images/LN.png';
import roisLogo from '../../assets/images/roisdigital_logo.png';
import wtf2020logo from '../../assets/images/logowtf.png';

function copyClipboard() {
  var copyText = document.querySelector('.btcAddress');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');

  document.querySelector('.copy-message').style.display = 'block';
  setTimeout(function () {
    document.querySelector('.copy-message').style.display = 'none';
  }, 2000);
}

function Donate() {
  return (
    <>
      <div className='donate-container'>
        <div className='row mb-5'>
          <h4 className='text-center mt-2 col-md-12 consideration mb-0'>
            If you liked this website, you can <span color='black'>make donations</span> using the following methods:
          </h4>
          <p className='text-center mt-1 col-md-12'>Thanks for your support!</p>
          <div className='col-md-4 mb-2 '>
            <p>
              <b>
                Donate with{' '}
                <Link to={{ pathname: paypalMe }} target='_blank'>
                  <u>Paypal</u>
                </Link>
              </b>
            </p>
            <Link to={{ pathname: paypalMe }} target='_blank'>
              <img src={paypalButton} alt='' className='paypal-button' />
            </Link>
          </div>
          <div className='col-md-4 mb-2'>
            <p>
              <b>
                Donate with{' '}
                <u onClick={copyClipboard} title='Click to Copy'>
                  Bitcoin
                </u>
              </b>
              <img src={bitcoinButton} alt='bitcoin' onClick={copyClipboard} className='btc-donate-logo' title='Click to Copy Address' />
            </p>
            <img src={bitcoinAddress} alt='' onClick={copyClipboard} className='btc-address' title='Click to Copy Address' />
            <input className='btcAddress' value={btcAddress} readOnly='readonly' title='Click to Copy Address' onClick={copyClipboard}></input>
            <span className='copy-message'>Copied!</span>
          </div>
          <div className='col-md-4 mb-2'>
            <p>
              <b>
                Donate with{' '}
                <Link to={{ pathname: tippingLN }} target='_blank' title='Click to Tip with LN'>
                  <u>Lightning Network Bitcoin</u>
                </Link>{' '}
              </b>
            </p>
            <Link to={{ pathname: tippingLN }} target='_blank'>
              <img src={lnButton} alt='Lightning Network' className='ln-button' title='Click to Tip with LN' />
            </Link>
          </div>
        </div>
        <div className='row text-center footer-donate'>
          <div className='col-md-12 text-center mb-2'>
            <p>Designed & Developed by</p>
          </div>
          <div className='col-md-3 text-center '></div>
          <div className='col-md-3 text-center mb-2'>
            <Link to={{ pathname: roisdigital }} target='_blank'>
              <img src={roisLogo} alt='ROIS Logo' title='ROIS Digital Team' className='rois-donate-logo' />
            </Link>
          </div>
          <div className='col-md-3 text-center mb-2'>
            <img src={wtf2020logo} alt='WTF2020 Logo' title='WTF 2020' className='wtf-donate-logo' />
          </div>
          <div className='col-md-3 text-center'></div>
        </div>
      </div>
    </>
  );
}

export default Donate;
