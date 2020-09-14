import React from 'react';
import { useHistory } from 'react-router-dom';

import useSearchBar from '../../hooks/useSearchBar';

function keyCheck(e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    goToEventList();
  }
}

function goToEventList(history) {
  if (document.querySelector('#eventList'))
    document.getElementById('eventList').scrollIntoView({
      behavior: 'smooth',
    });
  else {
    history.push('/');
  }
}

function SearchBar(props) {
  let input = props.input;
  let updateInput = props.updateInput;
  const history = useHistory();
  return (
    <div className='search_bar'>
      <input type='text' className='search_event' value={input} onChange={e => updateInput(e.target.value)} onKeyDown={e => keyCheck(e)} name='search' placeholder='Search Events by Keywords/Date'></input>
      <span className='search_icon' onClick={e => goToEventList(history)}>
        <i className='fa fa-search'></i>
      </span>
    </div>
  );
}

export default SearchBar;
