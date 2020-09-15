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
  else if (!events.data || !events.data.length) return <Error error='Oops! Use other search terms' parent='tbody' />;
  else {
    // let i = events.data.length;
    let i = 1;
    return (
      <>
        {events.data.map(event => (
          <EventElement event={event} key={event.id} i={i++} parent='list' />
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
      <h1 className='text-center'>Use the search bar to filter the events</h1>
      <p className='text-center'>And check WTF has happened this year!</p>
      <div className='container '>
        <div className='list_inner_container'>
          <table className='table table-striped eventsList table-responsive w-100 d-block d-md-table'>
            <tbody>{checkState(filteredEvents)}</tbody>
          </table>
          {!filteredEvents.loading && !filteredEvents.error && filteredEvents.data && filteredEvents.data.length ? (
            <>
              <MonthTag />
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default EventsList;
