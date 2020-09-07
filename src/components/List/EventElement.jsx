import React from 'react';

import '../../assets/styles/EventElement.css';

function renderListElement(event) {
  // return (
  //   <>
  //     <td className='location'>{event ? event.Location : null}</td>
  //     <td className='date'>{event ? event.DateInit : null}</td>
  //     <td className='actions'>
  //       {event ? (
  //         <>
  //           <span className='pictures open_popup'>Pictures</span>/<span className='links open_popup'>Links</span>
  //         </>
  //       ) : null}
  //     </td>
  //   </>
  // );
}

function renderCalendarElement(event) {
  return (
    <tr className='eventElement-meta'>
      {event ? (
        <td colSpan='2'>
          <span className='location'>{event.Location}</span>
          <span className='date'>{event.DateInit}</span>
          <div className='actions'>
            <>
              <span className='pictures open_popup'>Pictures</span> / <span className='links open_popup'>Links</span>
            </>
          </div>
        </td>
      ) : null}
    </tr>
  );
}

function EventElement(props) {
  const event = props.event;
  return (
    <>
      <tr className='eventElement'>
        <td className='index'>{props.i}</td>
        <td className='title'>{event ? event.Title : null}</td>
        {props.parent === 'list' ? renderListElement(event) : null}
      </tr>
      {props.parent === 'calendar' ? (
        <>
          <tr className='none'></tr> {renderCalendarElement(event)}
        </>
      ) : null}
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
