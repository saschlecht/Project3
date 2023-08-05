import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

//Authentication code. Don't mess with
const clientId = 'YOUR_CLIENT_ID';
const redirectUri = 'http://localhost:8080';

//let codeVerifier = generateRandomString(128);
codeVerifier = generateRandomString(128);

generateCodeChallenge(codeVerifier).then(codeChallenge => {
  let state = generateRandomString(16);
  let scope = 'user-read-private user-read-email';

  localStorage.setItem('code_verifier', codeVerifier);

  let args = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge
  });

  window.location = 'https://accounts.spotify.com/authorize?' + args;
});

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

let codeVerifier = localStorage.getItem('code_verifier');

let body = new URLSearchParams({
  grant_type: 'authorization_code',
  code: code,
  redirect_uri: redirectUri,
  client_id: clientId,
  code_verifier: codeVerifier
});

const response = fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body
})
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem('access_token', data.access_token);
  })
  .catch(error => {
    console.error('Error:', error);
  });




//generate playlist code
console.log(12345);         //how to print something to console?? this doesn't work
const songs = await genreSearch(accessToken, "Pop");

async function genreSearch(token, input) {
  let genre = "genre:" + input
  const result = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(genre)}&type=track`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await result.json()
}

class Song {
  constructor() {
    
  }
}

//adjacency list version
class ListGraph{
  constructor() {
      this.adjacencyList = {}
  }
  
  addNode(node) {
      if (!this.adjacencyList[node]) this.adjacencyList[node] = []
  }
}


//adjacency matrix version

