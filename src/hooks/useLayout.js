import { useEffect, useState } from 'react';

let Layout = {},
  setLayout;

export function updateLayout(title, bodyClass) {
  if (title) document.title = title;
  if (bodyClass) document.querySelector('body').setAttribute('class', bodyClass);
}

function useLayout(title = '', bodyClass = '') {
  [Layout, setLayout] = useState();

  useEffect(() => {
    return;
  }, []);

  return [Layout, setLayout];
}

export default useLayout;
