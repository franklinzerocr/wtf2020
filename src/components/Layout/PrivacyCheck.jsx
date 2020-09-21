import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PrivacyCheck() {
  let [privacyCheck, setPrivacyCheck] = useState({});
  if (('privacyCheck' in localStorage && localStorage.privacyCheck) || ('privacyCheck' in privacyCheck && privacyCheck.privacyCheck)) return <></>;
  else
    return (
      <div className='privacyCheck'>
        <p>This website uses cookies to give you the best experiencie. </p>
        <span
          className='button-privacy yes'
          onClick={() => {
            localStorage.privacyCheck = true;
            setPrivacyCheck(localStorage);
          }}
        >
          Agreed
        </span>
        <Link to='Privacy' className='button-privacy not'>
          Check Privacy Policy
        </Link>
      </div>
    );
}

export default PrivacyCheck;
