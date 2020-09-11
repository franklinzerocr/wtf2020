import React from 'react';

import DeadLink from '../../assets/images/dead-link.jpg';
import { updateLayout } from '../../hooks/useLayout';

function NotFound(props) {
  updateLayout(props.title, props.bodyClass);
  return (
    <div className='my-auto text-center '>
      <img className='img-fluid' src={DeadLink} alt='dead link' />
    </div>
  );
}

export default NotFound;
