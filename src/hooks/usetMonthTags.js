import { useEffect, useState } from 'react';

let monthTags = {},
  setMonthTags;

export async function updateMonthTags() {
  let finalMonthTags = [];
  let trEventElements = document.querySelectorAll('.eventsList .eventElement');
  let index = trEventElements.length;
  let index2 = 0;
  let previousSeparatedMonthTag = {};

  for (let tr of trEventElements) {
    let separatedMonthTag = { index: index, month: tr.getAttribute('month'), offSetTop: tr.offsetTop, offSetDown: tr.offsetTop + tr.offsetHeight };
    index--;

    if (finalMonthTags.length === 0) {
      let finalMonthTag = { index: index2, month: separatedMonthTag.month, offsetTop: separatedMonthTag.offSetTop, offSetDown: 0 };
      index2++;
      finalMonthTags.push(finalMonthTag);
    } else if (finalMonthTags[finalMonthTags.length - 1].month !== separatedMonthTag.month) {
      finalMonthTags[finalMonthTags.length - 1].offSetDown = previousSeparatedMonthTag.offSetDown;

      let finalMonthTag = { index: index2, month: separatedMonthTag.month, offsetTop: separatedMonthTag.offSetTop, offSetDown: 0 };
      index2++;
      finalMonthTags.push(finalMonthTag);
    }
    previousSeparatedMonthTag = separatedMonthTag;
  }

  finalMonthTags[finalMonthTags.length - 1].offSetDown = previousSeparatedMonthTag.offSetDown;

  setMonthTags(finalMonthTags);
}

export const useMonthTags = () => {
  [monthTags, setMonthTags] = useState([]);
  useEffect(() => {
    return;
  }, []);
  return [monthTags, setMonthTags];
};

export default useMonthTags;
