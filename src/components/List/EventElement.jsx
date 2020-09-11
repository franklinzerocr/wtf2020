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
        updatePopup(true, <>{event.Memes.length > 0 ? event.Memes.map(meme => <MemeElement key={meme.id} meme={meme}></MemeElement>) : <MemeElement meme={null}></MemeElement>}</>);
      }}
    >
      Memes
    </button>
  );
}

export function newsButton(event) {
  return (
    <button
      className='links open_popup'
      onClick={() => {
        updatePopup(true, <>{event.event_news.length > 0 ? event.event_news.map(news => <NewsElement key={news.id} news={news}></NewsElement>) : <NewsElement news={null}></NewsElement>}</>);
      }}
    >
      News
    </button>
  );
}

function renderListElement(event) {
  return (
    <>
      <td className='location'>{event ? event.Location : null}</td>
      <td className='date'>{event ? event.DateInit : null}</td>
      <td className='actions'>
        {event ? (
          <>
            <div className='actions_container'>
              {memeButton(event)}&nbsp;/&nbsp;{newsButton(event)}
            </div>
          </>
        ) : null}
      </td>
    </>
  );
}

function renderCalendarElement(event) {
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
          <span className='offtop'>{event ? props.i : null}</span>
        </td>
        <td className='title' colSpan={props.parent === 'calendar' ? 3 : 1}>
          {event ? event.Title : null}
        </td>
        {props.parent === 'list' ? renderListElement(event) : null}
      </tr>
      {props.parent === 'calendar' ? (
        <>
          <tr className='none'></tr>
          {renderCalendarElement(event)}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default EventElement;

/* <li className='FeaturedImage'>
            FeaturedImage=
            <Link to={{ pathname: backendURL + event.FeaturedImage.url }} target='_blank'>
              <img src={backendURL + event.FeaturedImage.formats.small.url} alt={event.Keywords} />
            </Link>
          </li>
          <li className='Memes'>
            Memes=
            {event.Memes.map(meme => (
              <Link to={{ pathname: backendURL + meme.url }} target='_blank' key={meme.id}>
                <img src={backendURL + meme.formats.small.url} alt={event.Keywords} />
              </Link>
            ))}
          </li> */
