import React, { useState } from 'react';
import { getMonthName, sortListReverse } from '../../utils';
import { updatePopup } from '../../hooks/usePopup';
import MemeElement from '../Popup/MemeElement';
import NewsElement from '../Popup/NewsElement';
import mindBlowEmoji from '../../assets/images/emoji mind blow.png';
import { backendURL } from '../../globals';
import { Link } from 'react-router-dom';

function newsPopup(event) {
  return (
    <>
      <h3 className='text-center'>Related News about</h3>
      <h5 className='text-center'>{event.Title}</h5>
      {memeButton(event)}
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
}

function memePopup(event) {
  return (
    <>
      <h3 className='text-center'>Memes about</h3>
      <h5 className='text-center'>{event.Title}</h5>
      {newsButton(event)}
      <div className='row'>
        {event.Memes.map(meme => (
          <MemeElement key={meme.id} meme={meme}></MemeElement>
        ))}
      </div>
    </>
  );
}

export function memeButton(event) {
  return (
    <button
      className='pictures open_popup'
      onClick={() => {
        updatePopup(true, memePopup(event));
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
        updatePopup(true, newsPopup(event));
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
          <td className='none' colSpan='1'></td>
        </>
      ) : (
        <td className='none' colSpan='4'></td>
      )}
    </tr>
  );
}

function EventElement(props) {
  let event = props.event;
  console.log(event.FeaturedImage);
  let featuredImageThumb = event.FeaturedImage.formats.thumbnail.url;
  event.event_news = sortListReverse(event.event_news, 'DatePublished');
  let [zoom, setZoom] = useState();
  return (
    <>
      <tr className='eventElement' month={event ? getMonthName(event.DateInit) : null}>
        <td className='thumb'>
          {props.parent === 'list' ? (
            <>
              <span
                className='zoom-icon'
                onClick={() => {
                  setZoom(!zoom);
                }}
              >
                <i className='fa fa-search-plus'></i>
              </span>
              <img
                className='featuredImage-thumb'
                src={backendURL + featuredImageThumb}
                alt={event.Title}
                title={event.Title}
                onClick={() => {
                  setZoom(!zoom);
                }}
              />
              {zoom === true ? (
                <Link to={{ pathname: backendURL + event.FeaturedImage.url }} target='_blank'>
                  <img
                    className='featuredImage-zoom'
                    src={backendURL + featuredImageThumb}
                    alt={event.Title}
                    onClick={() => {
                      setZoom(!zoom);
                    }}
                  />
                </Link>
              ) : null}
            </>
          ) : (
            <img src={mindBlowEmoji} alt='emoji mind blow' className='mindblow_emoji'></img>
          )}
        </td>
        <td className='title' colSpan='3'>
          {event ? (
            <span
              className='open-popup-title'
              onClick={() => {
                updatePopup(true, newsPopup(event));
              }}
            >
              {props.parent === 'list' ? (
                <>
                  <b className='index'>{props.i}</b>
                  {event.Title}
                </>
              ) : (
                event.Title
              )}
            </span>
          ) : null}
        </td>
      </tr>
      <tr className='none'></tr>
      {renderListElement(event)}
    </>
  );
}

export default EventElement;
