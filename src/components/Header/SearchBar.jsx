import React from 'react';
import useSearchBar from '../../hooks/useSearchBar';

function keyCheck(e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    goToEventList();
  }
}

function goToEventList() {
  document.getElementById('eventList').scrollIntoView({
    behavior: 'smooth',
  });
}

function SearchBar() {
  let [input, updateInput] = useSearchBar();
  return (
    <div className='search_bar'>
      <input type='text' value={input} onChange={e => updateInput(e.target.value)} onKeyDown={e => keyCheck(e)} name='search' id='search_event' placeholder='Search Events by Keywords/Date'></input>
      <span className='search_icon' onClick={e => goToEventList()}>
        <i className='fa fa-search'></i>
      </span>
    </div>
  );
}

export default SearchBar;
