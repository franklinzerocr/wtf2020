import { useEffect, useState } from 'react';
import wtfLogo from '../assets/images/logowtf.png';

let Layout = {},
  setLayout;

export function updateLayout(title, bodyClass, image = '') {
  if (bodyClass) document.querySelector('body').setAttribute('class', bodyClass);
  if (window.location.href !== 'https://wtf2020.help/' && title === ' - WTF 2020') return;
  if (title) {
    document.title = title;
    document.querySelector('head meta[name="description"]').setAttribute('content', title);
    document.querySelector('head meta[property="og:description"]').setAttribute('content', title);
    document.querySelector('head meta[property="twitter:description"]').setAttribute('content', title);
  }
  if (!image) image = wtfLogo;
  document.querySelector('head meta[property="og:image"]').setAttribute('content', image);
  document.querySelector('head meta[property="twitter:image"]').setAttribute('content', image);

  document.querySelector('head link[rel="canonical"]').setAttribute('href', window.location.href);
  document.querySelector('head meta[property="og:url"]').setAttribute('content', window.location.href);
  document.querySelector('head meta[property="twitter:url"]').setAttribute('content', window.location.href);
}

function useLayout() {
  [Layout, setLayout] = useState();

  useEffect(() => {
    return;
  }, []);

  return [Layout, setLayout];
}

export default useLayout;
