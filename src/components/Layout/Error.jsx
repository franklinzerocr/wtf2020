import React from 'react';

import '../../assets/styles/Error.css';

function Error(props) {
  return <tr className='danger'> {props.error && props.error.message ? props.error + props.error.message : props.error} </tr>;
}

export default Error;
