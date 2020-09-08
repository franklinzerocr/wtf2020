import React from 'react';

import '../../assets/styles/Loader.css';

function Loader(props) {
  const items = [];

  for (let index = 0; index < props.dots; index++) {
    items.push(<div key={index} />);
  }
  return (
    <tr>
      <td colSpan='5'>
        <div className={props.color === 'black' ? 'lds-grid black' : 'lds-grid'}>{items}</div>
      </td>
    </tr>
  );
}

export default Loader;
