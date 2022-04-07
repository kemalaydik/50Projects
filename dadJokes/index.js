const joke = document.querySelector('#joke');
const btn = document.querySelector('input');

// btn.addEventListener('click');

//.then
// function fetchJoke() {
// 	fetch('https://icanhazdadjoke.com/', {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	})
// 		.then(response => response.json())
// 		.then(data => (joke.innerText = data.joke));
// }

//Async
async function fetchJoke() {
	const res = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json',
		},
	});
	const data = await res.json();
	joke.innerText = data.joke;
}

fetchJoke();
btn.addEventListener('click', fetchJoke);
