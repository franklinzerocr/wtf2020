import React from 'react';

function Content(props) {
  return (
    <div className='page-content'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>{props.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
