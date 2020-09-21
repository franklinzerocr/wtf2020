import React from 'react';
import { useHistory } from 'react-router-dom';
import { toggleRecomendations } from '../../hooks/useRecomendations';
import { updateSearchBar } from '../../hooks/useSearchBar';
import { goToTop } from './Header';
import { goToEventList } from './SearchBar';

function Recomendations(props) {
  let recomendations = props.recomendations;
  const history = useHistory();

  return (
    <>
      {recomendations.visible ? (
        <>
          <div className='recomendations-box'>
            <span
              className='recomendation-item Home-item'
              onClick={() => {
                goToTop(history);
                toggleRecomendations();
              }}
            >
              <i className='fa fa-home'></i>
              Home
            </span>
            {recomendations.keywords.map((keyword, i) => (
              <span
                key={i}
                className={'recomendation-item ' + keyword.className}
                keyword={keyword.word === 'All' ? '' : keyword.word}
                onClick={element => {
                  updateSearchBar(element.target.getAttribute('keyword'));
                  goToEventList();
                  toggleRecomendations();
                }}
              >
                {keyword.word}
              </span>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

export default Recomendations;
