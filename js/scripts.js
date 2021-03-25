//Object array
let pokemonList = [
    {
      name: 'Bulbasaur',
      height: '3',
      type: ['Grass','Poison']
    },
    {
      name: 'Charmander',
      height: '2',
      type: 'Fire'
    },
    {
      name: 'Squirtle',
      height: '1',
      type: 'Water'
    },
  ];
// IIFE repository
let pokemonRepository = (function () {

  function add(pokemon) {
    if (typeof (pokemon) ==='object') {
      pokemonList.push(pokemon)
    }
  }

  function getAll() {
    return pokemonList;
  }

  function showdetails(pokemon) {
    console.log(pokemon)
  }

  function buttonListener (button, poke) {
    button.addEventListener('click', function () {
      showdetails(poke);
    });
  }

  function addListItem () {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokedex-button');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

//add function
pokemonRepository.add({ name: 'Pikachu', height: 1, type: 'Electric'});
console.log(pokemonRepository.getAll() );

//pokemon function added from IIFE public function to access from outside
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
