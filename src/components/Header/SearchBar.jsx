import React from 'react';

function SearchBar() {
  return (
    <div className='search_bar'>
      <input name='search' id='event_search'></input>
      <span className='search-icon'>
        <i className='fa fa-search'></i>
      </span>
    </div>
  );
}

export default SearchBar;
