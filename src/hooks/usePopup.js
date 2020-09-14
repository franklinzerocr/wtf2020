import { useEffect, useState } from 'react';

let popup = {},
  setPopup;

export const updatePopup = (show, content) => {
  setPopup({ show: show, content: content });
  if (show) document.querySelector('body').classList.add('open-popup');
  else document.querySelector('body').classList.remove('open-popup');
};

export const usePopup = () => {
  [popup, setPopup] = useState({ show: false, content: null });
  useEffect(() => {
    return;
  }, []);
  return [popup];
};

export default usePopup;
