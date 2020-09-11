import { useEffect, useState } from 'react';

let monthTags = {},
  setMonthTags;

function setPositionOfMonthTags() {
  for (let tag of document.querySelectorAll('.month_tags .monthTag')) {
    let height = tag.getAttribute('data-bottom') - tag.getAttribute('data-top') - 4;
    let top = parseInt(tag.getAttribute('data-top')) + 1;

    tag.style.height = height + 'px';
    tag.style.top = top + 'px';
    if (height <= 70) tag.classList.add('smallest-tag-size');
    else if (height <= 140) tag.classList.add('small-tag-size');
    else if (height <= 200) tag.classList.add('medium-tag-size');
  }
}

export async function updateMonthTags() {
  let finalMonthTags = [];
  let trEventElements = document.querySelectorAll('.eventsList .eventElement');
  let index = trEventElements.length;
  let index2 = 0;
  let previousSeparatedMonthTag = {};

  for (let tr of trEventElements) {
    let finalMonthTag = {};
    let separatedMonthTag = { index: index, month: tr.getAttribute('month'), offSetTop: tr.offsetTop, offsetBottom: tr.offsetTop + tr.offsetHeight };
    index--;

    if (finalMonthTags.length === 0) {
      finalMonthTag = { index: index2, month: separatedMonthTag.month, offsetTop: separatedMonthTag.offSetTop, offsetBottom: 0 };
      finalMonthTags.push(finalMonthTag);
      index2++;
    } else if (finalMonthTags[finalMonthTags.length - 1].month !== separatedMonthTag.month) {
      finalMonthTags[finalMonthTags.length - 1].offsetBottom = previousSeparatedMonthTag.offsetBottom;

      finalMonthTag = { index: index2, month: separatedMonthTag.month, offsetTop: separatedMonthTag.offSetTop, offsetBottom: 0 };
      finalMonthTags.push(finalMonthTag);
      index2++;
    }
    previousSeparatedMonthTag = separatedMonthTag;
  }
  if (previousSeparatedMonthTag && finalMonthTags && finalMonthTags.length > 0) {
    finalMonthTags[finalMonthTags.length - 1].offsetBottom = previousSeparatedMonthTag.offsetBottom;
    await setMonthTags(finalMonthTags);
    setPositionOfMonthTags();
  }
}

export const useMonthTags = () => {
  [monthTags, setMonthTags] = useState([]);
  useEffect(() => {
    return;
  }, []);
  return [monthTags, setMonthTags];
};

export default useMonthTags;
