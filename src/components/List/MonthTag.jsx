import React from 'react';
import useMonthTags from '../../hooks/usetMonthTags';

function MonthTag() {
  let [monthTags] = useMonthTags();
  if (monthTags.length > 0) console.log('monthTags', monthTags);
  return <div className='month_tags'>hola</div>;
}

export default MonthTag;
