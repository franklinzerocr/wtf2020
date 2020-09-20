import React from 'react';
import { getMonthName, sortListReverse } from '../../utils';
import { updatePopup } from '../../hooks/usePopup';
import MemeElement from '../Popup/MemeElement';
import NewsElement from '../Popup/NewsElement';
import mindBlowEmoji from '../../assets/images/emoji mind blow.png';
import { backendURL } from '../../globals';
import { Link } from 'react-router-dom';

export function memeButton(event) {
  return (
    <button
      className='pictures open_popup'
      onClick={() => {
        updatePopup(
          true,
          <>
            <h3 className='text-center'>Memes about</h3>
            <h5 className='text-center'>{event.Title}</h5>
            <div className='row'>
              {event.Memes.map(meme => (
                <MemeElement key={meme.id} meme={meme}></MemeElement>
              ))}
            </div>
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
            <h3 className='text-center'>Related News about</h3>
            <h5 className='text-center'>{event.Title}</h5>
            {event.event_news.length > 0 ? (
              <>
                {event.event_news.map(news => (
                  <NewsElement key={news.id} news={news}></NewsElement>
                ))}
              </>
            ) : (
              <>
                <h3 className='text-center'>Related News about</h3>
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
          <td className='date' colSpan='1'>
            {event.DateInit}
          </td>
          <td className='location' colSpan='1'>
            {event.Location}
          </td>
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
  let event = props.event;
  let featuredImage = event.FeaturedImage.url;
  let featuredImageThumb = event.FeaturedImage.formats.thumbnail.url;
  event.event_news = sortListReverse(event.event_news, 'DatePublished');
  return (
    <>
      <tr className='eventElement' month={event ? getMonthName(event.DateInit) : null}>
        <td className='thumb'>
          {props.parent === 'list' ? (
            <>
              <img className='featuredImage-thumb' src={backendURL + featuredImageThumb} alt={event.Title} title={event.Title} />
              <Link to={{ pathname: backendURL + featuredImage }} target='_blank'>
                <img className='featuredImage-zoom' src={backendURL + featuredImageThumb} alt={event.Title} />
              </Link>
            </>
          ) : (
            <img src={mindBlowEmoji} alt='emoji mind blow' className='mindblow_emoji'></img>
          )}
        </td>
        <td className='title' colSpan='3'>
          {props.parent === 'list' ? (
            <>
              {event ? (
                <>
                  <b className='index'>{props.i}</b>
                  {event.Title}
                </>
              ) : null}
            </>
          ) : (
            <>{event ? event.Title : null}</>
          )}
        </td>
      </tr>
      <tr className='none'></tr>
      {renderListElement(event)}
    </>
  );
}

export default EventElement;
