const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#7FDDFF',
	ground: '#FAC87E',
	rock: '#9BB2BA',
	fairy: '#FABBE6',
	poison: '#A19DE4',
	bug: '#FFB36F',
	dragon: '#32BD9D',
	psychic: '#909AFA',
	flying: 'E68F7A',
	fighting: '#E67557',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors)



//fetchPokemons()// 



const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    /*console.log(pokemon)*/
	createPokemonCard(pokemon)

}




const createPokemonCard = (pokemon) => {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');
	const poke_types = pokemon.types.map(el => el.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1)
	const name = pokemon.name /*[0].toUpperCase() + pokemon.name.slice(1)*/;
	const color = colors[type];

	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
		<div class="img-container">
		<img src = 'https://img.pokemondb.net/artwork/${pokemon.name}.jpg' alt='${pokemon.name}'>
		</img>
		</div>
		<div class="info">
			<span class="number">#${pokemon.id.toString().padStart(3,'0')}</span>
			<h3 class="name">${name} 
			
			`;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl)

}

fetchPokemons()
/*    
<small class="type">Type:<span>${type}</span></small>
*/
