// Contextual Web Sarch

// fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?fromPublishedDate=01%252F01%252F2020%2014%253A57%253A32.8&toPublishedDate=02%252F01%252F2020%2014%253A57%253A32.8&autoCorrect=false&pageNumber=1&pageSize=50&q=kobe%20bryant%20crash&safeSearch=false', {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
//     'x-rapidapi-key': 'f558f30306mshd50655455d86fc8p143db4jsn228e75d77415',
//   },
// })
//   .then(res => res.json())
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) => delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      return callApi('/badges');
    },
    create(badge) {
      return callApi(`/badges`, {
        method: 'POST',
        body: JSON.stringify(badge),
      });
    },
    read(badgeId) {
      // throw new Error('Error F!');
      return callApi(`/badges/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;

import { useEffect, useState } from 'react';

const useTvShowsApi = url => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    window
      .fetch(url)
      .then(response => response.json())
      .then(data => setTvShows(data));
  }, []);
  return tvShows;
};

export default useTvShowsApi;
