import React from 'react';

import useEvents from '../hooks/useEvents';

function Home(props) {
  const events = useEvents();
  console.log(events);
  document.title = props.title;
  if (events.data) return <div>{events.data[0].Title}</div>;
  else return <div>Nothing</div>;
}

export default Home;
