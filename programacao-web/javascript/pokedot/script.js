const pokemonName = document.getElementById('pokemon_nome');
const pokemonXP = document.getElementById('pokemon_xp');
const pokemonImage = document.getElementById('pokemon_img');
const pokemonType = document.getElementById('pokemon_tipo');
const pokemonWeight = document.getElementById('pokemon_peso');
const pokemonHeight = document.getElementById('pokemon_altura');

//const form = document.querySelector('.form');
const input = document.getElementById('nome_busca');
const buttonPrev = document.getElementById('btn-ant');
const buttonNext = document.getElementById('btn-prox');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Carregando...';
  pokemonXP.innerHTML = '...';
  pokemonType.innerHTML = '...';
  pokemonWeight.innerHTML = '...';
  pokemonHeight.innerHTML = '...';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonXP.innerHTML = `XP ${data.base_experience}`;
    pokemonImage.src = data['sprites']['other']['official-artwork']['front_default'];

    if(data.types[1])
      pokemonType.innerHTML = `${data.types[0].type.name} / ${data.types[1].type.name}`;
    else
      pokemonType.innerHTML = data.types[0].type.name;
    
    pokemonWeight.innerHTML = `${data.weight}kg`;
    pokemonHeight.innerHTML = `0.${data.height}m`;
    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Não encontrado :c';
    pokemonXP.innerHTML = '';
  }
}

input.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
  }
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
