// URL of the PokeAPI endpoint to retrieve data from
function fetchPikachu() {
    // Fetch data from the PokeAPI endpoint using the fetch() method
fetch('https://pokeapi.co/api/v2/pokemon/25')
.then((response) => response.json())
.then(data => {
  // Handle the retrieved data here
  const pokemonName = data.name;
  const pokemonId = data.id;
  const pokemonImage = data.sprites.front_default;
  const pokemonType = data.types[0].type.name

  const pokemonElement = document.getElementById('pokemon');
  pokemonElement.innerHTML = `
  <div class="wrapper">
    <h2>${pokemonId}: ${pokemonName}</h2>
    <img src="${pokemonImage}" alt="${pokemonName}">
    <p>Type: ${pokemonType}<p>
    </div>
  `

})
.catch(error => {
  // Handle errors here
  console.error('Error retrieving data from PokeAPI:', error);
});
}
  
