import React from 'react';

import '../../assets/styles/Loader.css';

function Loader(props) {
  const items = [];

  for (let index = 0; index < props.dots; index++) {
    items.push(<div key={index} />);
  }

  if (props.color === 'black') return <div className='lds-grid black'>{items}</div>;
  else return <div className='lds-grid'>{items}</div>;
}

export default Loader;
