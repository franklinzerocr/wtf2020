import React from 'react';

function SearchBar() {
  return (
    <div className='search_bar'>
      <input name='search' id='search_event' placeholder='Search Events by Keywords/Date'></input>
      <span className='search_icon'>
        <i className='fa fa-search'></i>
      </span>
    </div>
  );
}

export default SearchBar;
