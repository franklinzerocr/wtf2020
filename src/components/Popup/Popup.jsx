import React from 'react';
import ReactDOM from 'react-dom';
import usePopup, { updatePopup } from '../../hooks/usePopup';
import '../../assets/styles/Popup.css';

function checkClickToClose() {
  setTimeout(function () {
    let popupContainer = document.querySelector('.popup_container');
    document.body.addEventListener('click', function closeModal(event) {
      if (!popupContainer.contains(event.target)) {
        updatePopup(false, null);
        document.body.removeEventListener('click', closeModal);
      }
    });
  }, 0);
}

function Popup() {
  let [popup] = usePopup();
  if (!popup.show) return <></>;
  return (
    <div>
      {ReactDOM.createPortal(
        <>
          <div className='popup_wrapper'>
            <div className='popup_container'>
              <div className='popup-top'>
                <button
                  className='popup_close'
                  onClick={() => {
                    updatePopup(false, null);
                  }}
                >
                  X
                </button>
              </div>
              <div className='popup_content'>{popup.content}</div>
            </div>
          </div>
        </>,
        document.getElementById('popup')
      )}
      {checkClickToClose()}
    </div>
  );
}

export default Popup;
