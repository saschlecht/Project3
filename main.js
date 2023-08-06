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

//retrieve number of songs in genre
//count = ?

adjList = new ListGraph()
for (let i = 0; i < count; i++) {
  //retrieve song values from json object
  //song = new Song(dance, ener, live)
  //adjList1.addNode(song)
}

//traverse adjList
//we have genre, mood1, and mood2

startDan;
endDan;
startEne;
endEne;
startLiv;
endLiv;

//set start and end track feature values to their appopriate amounts
if (mood1 == "happy") {

}
if (mood1 == "sad") {
  
}
if (mood1 == "excited") {
  
}
if (mood1 == "withdrawn") {
  
}
if (mood2 == "happy") {

}
if (mood2 == "sad") {
  
}
if (mood2 == "excited") {
  
}
if (mood2 == "withdrawn") {
  
}

//set currSong to random song in genre with the given starting mood values

playlist = new Array();

//while currSong's values are not equal to the values of mood2:
  //from currSong's adjacent songs with values in between current mood and mood2, add song 
  //with values closest to mood2

class Song {
  constructor(danceability, energy, liveness) {
    this.danceability = danceability
    this.energy = energy
    this.liveness = liveness
  }
}

//adjacency list version
class ListGraph {
  constructor() {
      this.adjacencyList = new Map()
  }
  
  addNode(node) {
      //insert node with empty list of adjacent nodes
      if (!this.adjacencyList[node]) this.adjacencyList[node] = []

      for (let [posAdj, arr] of this.adjacencyList) {
        if (arr.find(node) != undefined) {
          //current node is adjacent to this node
          this.adjacencyList[node].push(posAdj)
        }
        else if (posAdj != node) {
          //check difference between each song's values
          dan = posAdj.danceability - this.danceability
          ene = posAdj.energy - this.energy
          liv = posAdj.liveness - this.liveness

          if (dan > -0.1 && dan < 0.1 && ene > -0.1 && ene < 0.1 && liv > -0.1 && liv < 0.1) {
            //if all attributes of the tracks are within 0.1 of each other
            //add nodes to each other's vectors
            adjacencyList[posAdj].push(node)
            adjacencyList[node].push(posAdj)
          }
        }
      }
  }
}

