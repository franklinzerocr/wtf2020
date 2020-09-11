import React from 'react';

import Loader from '../Layout/Loader';
import Error from '../Layout/Error';
import EventElement from '../List/EventElement';
import useEventList from '../../hooks/useEventList';

import '../../assets/styles/List.css';
import MonthTag from './MonthTag';
import useFilteredEvents from '../../hooks/useFilteredEvents';

function checkState(events) {
  if (events.loading) return <Loader dots={3} color='black' parent='tbody' />;
  else if (events.error) return <Error error={events.error} parent='tbody' />;
  else if (!events.data || !events.data.length) return <Error error='EMPTY' parent='tbody' />;
  else {
    let i = events.data.length;
    return (
      <>
        {events.data.map(event => (
          <EventElement event={event} key={event.id} i={i--} parent='list' />
        ))}
      </>
    );
  }
}

function EventsList(props) {
  useEventList();
  let [filteredEvents] = useFilteredEvents();
  return (
    <section id='eventList' className='list'>
      <h1 className='text-center'>Check WTF Happened</h1>
      <div className='container '>
        <div className='list_inner_container'>
          <table className='table table-striped eventsList'>
            <tbody>{checkState(filteredEvents)}</tbody>
          </table>
          {!filteredEvents.loading && !filteredEvents.error && filteredEvents.data && filteredEvents.data.length ? (
            <>
              {console.log('hola')}
              <MonthTag />
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default EventsList;
