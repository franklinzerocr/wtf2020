import { useEffect, useState } from 'react';

let recomendations = {},
  setRecomendations;

async function getKeywords(monthTags, events) {
  let keywords = [];
  keywords.push({ word: 'All', className: 'keyword-all' });
  for (let month of monthTags) keywords.push({ word: month.month.substring(0, month.month.length - 5), className: 'keyword-month' });

  let eventsAux = events.filter((thing, index, self) => index === self.findIndex(t => t.Location === thing.Location));
  for (let event of eventsAux) keywords.push({ word: event.Location, className: 'keyword-location' });

  return keywords;
}

export async function updateRecomendations(monthTags, events) {
  let keywords = await getKeywords(monthTags, events);
  setRecomendations({ visible: false, keywords: keywords });
}

export function toggleRecomendations() {
  setRecomendations({ visible: !recomendations.visible, keywords: recomendations.keywords });
}

export const getRecomendations = () => {
  return recomendations;
};

export const useRecomendations = () => {
  [recomendations, setRecomendations] = useState({ visible: false, keywords: [] });
  useEffect(() => {
    return;
  }, []);
  return [recomendations];
};

export default useRecomendations;
