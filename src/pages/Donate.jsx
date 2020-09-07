import React from 'react';
import useLayout from '../hooks/useLayout';

function Donate(props) {
  useLayout(props.title, props.bodyClass);
  return <div>Donate</div>;
}

export default Donate;
