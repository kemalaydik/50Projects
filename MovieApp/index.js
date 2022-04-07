const API_KEY = '9e37f878d5870217dced3e100a27f300';
const imgUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w500';

const main = document.querySelector('main');
const form = document.querySelector('form');
const input = document.querySelector('form>input');

const parameters = {
	params: {
		api_key: API_KEY,
		language: 'en-US',
		query: input.value || '',
	},
};

axios.get('https://api.themoviedb.org/3/movie/popular', parameters).then(renderMovies);
form.addEventListener('submit', e => {
	e.preventDefault();
	axios
		.get('https://api.themoviedb.org/3/search/movie', {
			params: {
				api_key: API_KEY,
				language: 'en-US',
				query: input.value,
			},
		})
		.then(renderMovies);
});

function renderMovies(resp) {
	const html = resp.data.results.reduce((ac, movie) => {
		return (
			ac +
			`<div class="movie">
	          <img src="${imgUrl + imgSize + movie.poster_path}" alt="">
	          <div class="movie-info">
	              <h3 class="movie-title">${movie.original_title}</h3>
	              <span class="${colorRate(movie)}">${movie.vote_average}</span>
	          </div>
	          <div class="overview">
	              <h3>Overview</h3>
	              ${movie.overview}
	          </div>
      </div>`
		);
	}, '');
	main.innerHTML = html;
}

function colorRate(movie) {
	if (movie.vote_average >= 8) return 'green';
	if (movie.vote_average >= 7) return 'orange';
	return 'red';
}
