import React from 'react';

import Loader from '../Layout/Loader';
import Error from '../Layout/Error';
import EventElement from '../List/EventElement';
import useEventList from '../../hooks/useEventList';

import '../../assets/styles/List.css';
import MonthTag from './MonthTag';
import useFilteredEvents from '../../hooks/useFilteredEvents';
import useSort from '../../hooks/useSort';
import { goToFooter } from '../Header/Header';
import { goToEventList } from '../Header/SearchBar';
import { useHistory } from 'react-router-dom';
import { cumulativeOffset, findPos } from '../../utils';

function checkState(events, sort) {
  if (events.loading) return <Loader dots={3} color='black' parent='tbody' />;
  else if (events.error) return <Error error={events.error} parent='tbody' />;
  else if (!events.data || !events.data.length) return <Error error='Oops! Use other search terms' parent='tbody' />;
  else {
    if (sort === 'down') {
      let i = 1;
      return (
        <>
          {events.data.map(event => (
            <EventElement event={event} key={event.id} i={i++} parent='list' />
          ))}
        </>
      );
    } else {
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
}

function getCurrentTag() {
  let curentTag = null;
  let topDiff = 0;
  for (let tag of document.querySelectorAll('.month_tags .monthTag')) {
    topDiff = window.pageYOffset - cumulativeOffset(tag).top + 95;
    if (topDiff > 10 && topDiff <= tag.offsetHeight) {
      curentTag = tag;
      break;
    }
  }
  if (!curentTag) {
    topDiff = window.pageYOffset - cumulativeOffset(document.querySelectorAll('.month_tags .monthTag')[0]).top + 95;
    if (topDiff < 10) curentTag = document.querySelectorAll('.month_tags .monthTag')[0];
    else {
      topDiff = window.pageYOffset - cumulativeOffset(document.querySelectorAll('.month_tags .monthTag')[document.querySelectorAll('.month_tags .monthTag').length - 1]).top + document.querySelectorAll('.month_tags .monthTag')[document.querySelectorAll('.month_tags .monthTag').length - 1].offsetHeight;
      if (topDiff > 0) curentTag = document.querySelectorAll('.month_tags .monthTag')[document.querySelectorAll('.month_tags .monthTag').length - 1];
    }
  }
  return curentTag;
}

function goToNextMonth() {
  let currentTag = getCurrentTag();
  if (!currentTag) return;
  let index = currentTag.getAttribute('index');
  index = parseInt(index) + 1;
  let nextMonthTag = document.querySelector('.monthTag[index="' + index + '"]');
  if (nextMonthTag) {
    let listPos = findPos(nextMonthTag);
    window.scroll({ left: 0, top: listPos[0] - 70, behavior: 'smooth' });
  }
}

function goToPreviousMonth() {
  let currentTag = getCurrentTag();
  if (!currentTag) return;
  let index = currentTag.getAttribute('index');
  index = parseInt(index) - 1;
  let previousMonthTag = document.querySelector('.monthTag[index="' + index + '"]');
  if (previousMonthTag) {
    let listPos = findPos(previousMonthTag);
    window.scroll({ left: 0, top: listPos[0] - 70, behavior: 'smooth' });
  }
}

function EventsList(props) {
  useEventList();
  let [filteredEvents] = useFilteredEvents();
  let [sort] = useSort('down');
  let history = useHistory();
  return (
    <section id='eventList' className='list'>
      <h1 className='text-center'>Use the search bar to filter the events</h1>
      <p className='text-center checkWTF'>And check WTF has happened since 2020!</p>
      <div className='container '>
        {/* <div className='sorting text-center'>
          <span className='sort-label'>Sort:</span>
          <span>
            {sort === 'down' ? (
              <>
                <i
                  className='fa fa-arrow-circle-down down'
                  color='orange'
                  onClick={() => {
                    updateSortFilteredEvents(filteredEvents, 'down');
                  }}
                ></i>
                <i
                  className='fa fa-arrow-circle-o-up up'
                  onClick={() => {
                    updateSortFilteredEvents(filteredEvents, 'up');
                  }}
                ></i>
              </>
            ) : (
              <>
                <i
                  className='fa fa-arrow-circle-o-down down'
                  onClick={() => {
                    updateSortFilteredEvents(filteredEvents, 'down');
                  }}
                ></i>
                <i
                  className='fa fa-arrow-circle-up up'
                  color='orange'
                  onClick={() => {
                    updateSortFilteredEvents(filteredEvents, 'up');
                  }}
                ></i>
              </>
            )}
          </span>
        </div> */}
        <div className={'list_inner_container ' + sort}>
          <table className='table table-striped eventsList table-responsive w-100 d-block d-md-table'>
            <tbody>{checkState(filteredEvents, sort)}</tbody>
          </table>
          {!filteredEvents.loading && !filteredEvents.error && filteredEvents.data && filteredEvents.data.length ? (
            <>
              <MonthTag />
            </>
          ) : null}
        </div>
      </div>
      <span
        className='goToHome-button'
        onClick={() => {
          goToEventList(history);
        }}
      >
        <i className='fa fa-arrow-up'></i>
      </span>
      <span
        className='previousMonth-button'
        onClick={() => {
          goToPreviousMonth(history);
        }}
      >
        <i className='fa  fa-chevron-circle-up'></i>
      </span>
      <span
        className='nexMonth-button'
        onClick={() => {
          goToNextMonth(history);
        }}
      >
        <i className='fa fa-chevron-circle-down'></i>
      </span>
      <span
        className='goToFooter-button'
        onClick={() => {
          goToFooter(history);
        }}
      >
        <i className='fa fa-arrow-down'></i>
      </span>
    </section>
  );
}

export default EventsList;
