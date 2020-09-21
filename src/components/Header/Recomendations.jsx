import React from 'react';
import { toggleRecomendations } from '../../hooks/useRecomendations';
import { updateSearchBar } from '../../hooks/useSearchBar';
import { goToEventList } from './SearchBar';

function Recomendations(props) {
  let recomendations = props.recomendations;
  return (
    <>
      {recomendations.visible ? (
        <>
          <div className='recomendations-box'>
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
