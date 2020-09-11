import React from 'react';
import { Link } from 'react-router-dom';

function NewsElement(props) {
  return (
    <div className='single_news row'>
      <div className='col-md-3 align-self-center'>{props.news.FeaturedImage ? <img src={props.news.FeaturedImage} alt={props.news.Title}></img> : null}</div>
      <h5 className='title col-md-9 align-self-center'>
        <Link to={{ pathname: props.news.URL }} target='_blank'>
          {props.news.Title}
        </Link>
      </h5>
    </div>
  );
}

export default NewsElement;
