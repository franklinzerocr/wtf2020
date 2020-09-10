import React from 'react';
import ReactDOM from 'react-dom';
import usePopup from '../../hooks/usePopup';

function Popup() {
  let [popup] = usePopup();
  if (!popup.show) return <></>;
  return (
    <div>
      {ReactDOM.createPortal(
        <>
          <div className='popup_container'>
            <button className='popup_close'>X</button>
            {popup.content}
          </div>
        </>,
        document.getElementById('popup')
      )}
    </div>
  );
}

export default Popup;
