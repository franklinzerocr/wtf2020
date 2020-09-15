import React from 'react';

import '../../assets/styles/Error.css';

function Error(props) {
  return (
    <>
      {props.parent === 'tbody' ? (
        <tr className='danger'>
          <td className='text-center'>{props.error && props.error.message ? props.error + props.error.message : props.error}</td>
        </tr>
      ) : (
        <span className='danger text-center'>{props.error && props.error.message ? props.error + props.error.message : props.error}</span>
      )}
    </>
  );
}
export default Error;
