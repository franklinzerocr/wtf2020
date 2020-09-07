import React from 'react';

import { updateLayout } from '../hooks/useLayout';

function Donate(props) {
  updateLayout(props.title, props.bodyClass);
  return <div>Donate</div>;
}

export default Donate;
