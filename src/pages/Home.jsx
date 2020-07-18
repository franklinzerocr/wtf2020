import React from 'react';
// import { Link } from 'react-router-dom';

function Home(props) {
  document.title = props.title;
  return <div>Hello world from REACT</div>;
}

export default Home;
