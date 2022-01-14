// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  }
  const piada = document.querySelector('#jokeContainer');
  const { joke }= await fetch(API_URL, myObject).then((response) => response.json());
  piada.textContent = joke;  
};

window.onload = () => fetchJoke();
