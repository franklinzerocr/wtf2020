import React from 'react';

import '../assets/styles/Loader.css';

function Loader(props) {
  const items = [];

  for (let index = 0; index < props.dots; index++) {
    items.push(<div key={index} />);
  }

  return <div className='lds-grid'>{items}</div>;
}

export default Loader;
