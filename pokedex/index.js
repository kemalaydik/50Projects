const URL = 'https://pokeapi.co/api/v2/pokemon/';
const CARD_NUMBER = 150;

const container = document.querySelector('.container');

const promiseArray = [];

function renderHTML(img, id, title, cat) {
	const type = {
		grass: 'lightgreen',
		fire: 'orange',
		water: 'lightblue',
		bug: 'yellow',
		normal: '#eee',
		poison: 'lightcoral',
		electric: 'cyan',
	};

	return `
	        <div class="card" style="background-color:${type[cat]}">
            <img src="${img}" alt="">
            <small>#00${id}</small>
            <h2>${title}</h2>
            <p>Type: ${cat}</p>
        </div>
	`;
}

for (let i = 1; i <= CARD_NUMBER; i++) promiseArray.push(axios.get(URL + i));

async function fetchPokemons() {
	const data = await Promise.all(promiseArray);
	for (let i = 0; i < CARD_NUMBER; i++) {
		const {
			data: {
				name: title,
				id,
				sprites: { front_default: img },
				types: [
					{
						type: { name: type },
					},
				],
			},
		} = data[i];
		container.insertAdjacentHTML('beforeend', renderHTML(img, id, title, type));
	}
}

fetchPokemons();
