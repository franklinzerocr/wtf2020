import { useEffect, useState } from 'react';

let Layout = {},
  setLayout;

export function updateLayout(title, bodyClass) {
  setLayout({ title: title, bodyClass: bodyClass });
}

function useLayout(title = '', bodyClass = '') {
  [Layout, setLayout] = useState({ title: title, bodyClass: bodyClass });

  useEffect(() => {
    if (Layout.title) document.title = Layout.title;
    if (Layout.bodyClass) document.querySelector('body').setAttribute('class', Layout.bodyClass);
    return;
  }, []);

  return [Layout, setLayout];
}

export default useLayout;
