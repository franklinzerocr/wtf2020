import React from 'react';
import { updateLayout } from '../hooks/useLayout';

function Privacy(props) {
  updateLayout(props.title, props.bodyClass);

  return <div>Privacy</div>;
}

export default Privacy;
