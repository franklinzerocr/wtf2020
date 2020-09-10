import { useEffect, useState } from 'react';

let popup = {},
  setPopup;

export const getPopup = () => {
  return popup;
};

export const updatePopup = (show, content) => {
  setPopup({ show: show, content: content });
};

export const usePopup = () => {
  [popup, setPopup] = useState({ show: false, content: null });
  useEffect(() => {
    return;
  }, []);
  return [popup];
};

export default usePopup;
