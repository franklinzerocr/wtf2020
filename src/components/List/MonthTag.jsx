import React from 'react';
import useMonthTags from '../../hooks/usetMonthTags';

function MonthTag() {
  let [monthTags] = useMonthTags();

  return (
    <div className='month_tags'>
      {monthTags.map(tag => (
        <div key={tag.index} className='monthTag' data-bottom={tag.offsetBottom} data-top={tag.offsetTop}>
          {tag.month}
        </div>
      ))}
    </div>
  );
}

export default MonthTag;
