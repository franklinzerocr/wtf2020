import React from 'react';
import { useHistory } from 'react-router-dom';
import { toggleRecomendations } from '../../hooks/useRecomendations';
import { findPos } from '../../utils';

function keyCheck(e, history) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    goToEventList(history);
  }
}

export function goToEventList(history = null) {
  if (document.querySelector('#eventList')) {
    document.getElementById('eventList').scrollIntoView({
      behavior: 'smooth',
    });
  } else {
    history.push('/');
  }
}

function checkScrollToGoToEventList() {
  let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
  let listPos = findPos(document.querySelector('.list'));
  if (listPos && scrollPos > listPos[0]) window.scroll({ left: 0, top: listPos[0], behavior: 'smooth' });
}

function SearchBar(props) {
  let input = props.input;
  let updateInput = props.updateInput;
  let recomendations = props.recomendations;
  const history = useHistory();
  return (
    <div className='search_bar'>
      <input
        type='text'
        className='search_event'
        value={input}
        onChange={e => {
          checkScrollToGoToEventList();
          updateInput(e.target.value);
        }}
        onKeyDown={e => keyCheck(e, history)}
        name='search'
        placeholder='Filter Events by Keywords/Date'
      ></input>
      <span className='search_icon' onClick={e => goToEventList(history)}>
        <i className='fa fa-search'></i>
      </span>

      <div className='recomendations'>
        <span>
          <i className={recomendations && recomendations.visible ? 'fa fa-remove' : 'fa fa-bars'} onClick={toggleRecomendations}></i>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
