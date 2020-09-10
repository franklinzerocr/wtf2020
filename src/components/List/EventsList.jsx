import React from 'react';

import Loader from '../Layout/Loader';
import Error from '../Layout/Error';
import EventElement from '../List/EventElement';
import useEventList from '../../hooks/useEventList';

import '../../assets/styles/List.css';
import MonthTag from './MonthTag';

function checkState(events) {
  if (events.loading) return <Loader dots={3} color='black' parent='tbody' />;
  else if (events.error) return <Error error={events.error} />;
  else if (!events.data || !events.data.length) return <Error error='EMPTY' />;
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
  const [events] = useEventList();
  return (
    <section className='list'>
      <h1 className='text-center'>CHECK THE WTF EVENTS</h1>
      <div className='container '>
        <div className='list_inner_container'>
          <table className='table table-striped eventsList'>
            <tbody>{checkState(events)}</tbody>
          </table>
          {!events.loading && !events.error && events.data && events.data.length ? <MonthTag /> : null}
        </div>
      </div>
    </section>
  );
}

export default EventsList;
