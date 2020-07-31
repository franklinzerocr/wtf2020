import React from 'react';

import '../assets/styles/Error.css';

function Error(props) {
  return <div className='error_message'> {props.error.message} </div>;
}

export default Error;
