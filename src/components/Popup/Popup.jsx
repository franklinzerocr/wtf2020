import React from 'react';
import ReactDOM from 'react-dom';
import usePopup, { updatePopup } from '../../hooks/usePopup';

function Popup() {
  let [popup] = usePopup();
  if (!popup.show) return <></>;
  return (
    <div>
      {ReactDOM.createPortal(
        <>
          <div className='popup_wrapper'>
            <div className='popup_container'>
              <button
                className='popup_close'
                onClick={() => {
                  updatePopup(false, null);
                }}
              >
                X
              </button>
              {popup.content}
            </div>
          </div>
        </>,
        document.getElementById('popup')
      )}
    </div>
  );
}

export default Popup;
