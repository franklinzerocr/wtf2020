import React from 'react';
import useSearchBar from '../../hooks/useSearchBar';

function SearchBar() {
  let [input, updateInput] = useSearchBar();
  return (
    <div className='search_bar'>
      <input type='text' value={input} onChange={e => updateInput(e.target.value)} name='search' id='search_event' placeholder='Search Events by Keywords/Date'></input>
      <span className='search_icon'>
        <i className='fa fa-search'></i>
      </span>
    </div>
  );
}

export default SearchBar;
