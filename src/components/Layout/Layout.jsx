import React from 'react';

import useLayout from '../../hooks/useLayout';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../assets/styles/Layout.css';

function Layout(props) {
  useLayout();
  return <>{props.children}</>;
}

export default Layout;