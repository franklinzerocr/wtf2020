import { useEffect, useState } from 'react';
import { setPositionOfMonthTags } from '../components/List/MonthTag';

let monthTags = {},
  setMonthTags;

export function updateMonthTags() {
  setTimeout(async () => {
    let finalMonthTags = [];
    let trEventElements = document.querySelectorAll('.eventsList .eventElement');
    let index = trEventElements.length;
    let index2 = 0;
    let previousSeparatedMonthTag = {};

    for (let tr of trEventElements) {
      let finalMonthTag = {};
      let separatedMonthTag = { index: index, month: tr.getAttribute('month'), offSetTop: tr.offsetTop, offsetBottom: tr.offsetTop + tr.offsetHeight };
      index--;
      console.log(tr);

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
  }, 0);
}

export const useMonthTags = () => {
  [monthTags, setMonthTags] = useState([]);
  useEffect(() => {
    return;
  }, []);
  return [monthTags, setMonthTags];
};

export default useMonthTags;
