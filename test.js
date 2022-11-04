
const fetch = require("node-fetch");

function fetchKantoPokemon(){
    const name = "ditto"
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then(response => response.json())
  .then(allpokemon => console.log(allpokemon))
}

fetchKantoPokemon()
