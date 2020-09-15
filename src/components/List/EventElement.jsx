import React from 'react';
import { getMonthName } from '../../utils';
import { updatePopup } from '../../hooks/usePopup';
import MemeElement from '../Popup/MemeElement';
import NewsElement from '../Popup/NewsElement';

export function memeButton(event) {
  return (
    <button
      className='pictures open_popup'
      onClick={() => {
        updatePopup(
          true,
          <>
            {event.Memes.length > 0 ? (
              <>
                <h3 className='text-center'>Memes</h3>
                <h5 className='text-center'>{event.Title}</h5>
                {event.Memes.map(meme => (
                  <MemeElement key={meme.id} meme={meme}></MemeElement>
                ))}
              </>
            ) : (
              <>
                <h3 className='text-center'>Memes</h3>
                <h5 className='text-center'>{event.Title}</h5>
                <MemeElement meme={null}></MemeElement>
              </>
            )}
          </>
        );
      }}
    >
      Check Memes
    </button>
  );
}

export function newsButton(event) {
  return (
    <button
      className='links open_popup'
      onClick={() => {
        updatePopup(
          true,
          <>
            <h3 className='text-center'>Related News</h3>
            <h5 className='text-center'>{event.Title}</h5>
            {event.event_news.length > 0 ? (
              <>
                {event.event_news.map(news => (
                  <NewsElement key={news.id} news={news}></NewsElement>
                ))}
              </>
            ) : (
              <>
                <h3 className='text-center'>Related News</h3>
                <h5 className='text-center'>{event.Title}</h5>
                <NewsElement news={null}></NewsElement>
              </>
            )}
          </>
        );
      }}
    >
      Related News
    </button>
  );
}

function renderListElement(event) {
  return (
    <tr className='eventElement-meta'>
      {event ? (
        <>
          <td className='none' colSpan='1'></td>
          <td className='location'>{event.Location}</td>
          <td className='date'>{event.DateInit}</td>
          <td className='actions'>
            <div className='actions_container'>
              {memeButton(event)}&nbsp;/&nbsp;{newsButton(event)}
            </div>
          </td>
        </>
      ) : (
        <td className='none' colSpan='4'></td>
      )}
    </tr>
  );
}

function EventElement(props) {
  const event = props.event;
  return (
    <>
      <tr className='eventElement' month={event ? getMonthName(event.DateInit) : null}>
        <td className='index'>
          {props.parent === 'list' ? (
            <span className='offtop'>{props.i}</span>
          ) : (
            <span aria-label='explosion' role='img'>
              🤯
            </span>
          )}
        </td>
        <td className='title' colSpan='3'>
          {event ? event.Title : null}
        </td>
      </tr>
      <tr className='none'></tr>
      {renderListElement(event)}
    </>
  );
}

export default EventElement;
