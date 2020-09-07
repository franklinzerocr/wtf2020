import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import useLayout from '../hooks/useLayout';

function Layout(props) {
  useLayout();
  return <>{props.children}</>;
}

export default Layout;
