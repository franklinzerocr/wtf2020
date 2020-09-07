import React from 'react';

import DeadLink from '../../assets/images/dead-link.jpg';

function NotFound(props) {
  document.title = props.title;
  return (
    <div className='my-auto text-center '>
      <img className='img-fluid' src={DeadLink} alt='dead link' />
    </div>
  );
}

export default NotFound;
