import React from 'react';

import '../../assets/styles/Loader.css';

function Loader(props) {
  const items = [];

  for (let index = 0; index < props.dots; index++) {
    items.push(<div key={index} />);
  }
  return (
    <tr>
      <div className={props.color === 'black' ? 'lds-grid black' : 'lds-grid'}>{items}</div>
    </tr>
  );
}

export default Loader;
