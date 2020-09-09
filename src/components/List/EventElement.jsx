import React from 'react';
import { getMonthName } from '../../utils';

function renderListElement(event) {
  return (
    <>
      <td className='location'>{event ? event.Location : null}</td>
      <td className='date'>{event ? event.DateInit : null}</td>
      <td className='actions'>
        {event ? (
          <>
            <span className='pictures open_popup' data-id={event.id}>
              Memes
            </span>{' '}
            /{' '}
            <span className='links open_popup' data-id={event.id}>
              Coverage
            </span>
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
            <span className='pictures open_popup' data-id={event.id}>
              Memes
            </span>{' '}
            /{' '}
            <span className='links open_popup' data-id={event.id}>
              Coverage
            </span>
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
      <tr className='eventElement' month={props.i >= 3 || !event ? 'February' : getMonthName(event.DateInit)}>
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
          <tr className='none'>
            <td></td>
          </tr>
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
