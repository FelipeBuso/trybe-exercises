// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


function showJoke(joke) {
  const getId = document.getElementById('joke-list');
  const list = document.createElement('li');
  list.innerText = joke;
  getId.appendChild(list);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
     .then(data => showJoke(data.joke))
      
};


window.onload = () => fetchJoke();
