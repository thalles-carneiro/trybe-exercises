// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  const jokeContainer = document.getElementById('jokeContainer');
  const objSpecs = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };
  fetch(API_URL, objSpecs)
    .then(response => response.json())
    .then(data => jokeContainer.innerText = data.joke);
};

window.onload = () => fetchJoke();