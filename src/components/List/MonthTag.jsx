import React from 'react';
import useMonthTags from '../../hooks/usetMonthTags';
import { cumulativeOffset } from '../../utils';

export function setPositionOfMonthTags() {
  for (let tag of document.querySelectorAll('.month_tags .monthTag')) {
    let height = tag.getAttribute('data-bottom') - tag.getAttribute('data-top') + 30 - 4;
    let top = parseInt(tag.getAttribute('data-top')) + 10;

    tag.style.height = height + 'px';
    tag.style.top = top + 'px';
    if (height <= 70) tag.classList.add('smallest-tag-size');
    else if (height <= 140) tag.classList.add('small-tag-size');
    else if (height <= 200) tag.classList.add('medium-tag-size');
  }
}

export function monthTagAdjust() {
  for (let tag of document.querySelectorAll('.month_tags .monthTag')) {
    let topDiff = window.pageYOffset - cumulativeOffset(tag).top + 75;
    if (topDiff > 10 && topDiff <= tag.offsetHeight - tag.querySelector('.monthTag-span').offsetHeight - 10) {
      tag.querySelector('.monthTag-span').style.top = topDiff + 'px';
    }
  }
}

function MonthTag() {
  let [monthTags] = useMonthTags();

  return (
    <div className='month_tags'>
      {monthTags.map(tag => (
        <div key={tag.index} index={tag.index} className={tag.index % 2 === 1 ? 'monthTag odd-tag' : 'monthTag even-tag'} data-bottom={tag.offsetBottom} data-top={tag.offsetTop}>
          <span className='monthTag-span'>{tag.month}</span>
        </div>
      ))}
    </div>
  );
}

export default MonthTag;
