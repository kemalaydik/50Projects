const users = document.querySelector('.users');
const search = document.querySelector('input');
const URL = 'https://randomuser.me/api/';
const data = [];

parameters = {
	params: {
		results: 300,
		gender: 'female',
	},
};

function concatName(title, first, last) {
	return title + ' ' + first + ' ' + last;
}

function concatLocation(city, country) {
	return city + ', ' + country;
}

function listUsers(arr) {
	arr.forEach(el => {
		const { name, location, medium } = el;
		users.insertAdjacentHTML('beforeend', renderHTML(name, location, medium));
	});
}

function filter() {
	users.innerHTML = '';
	const temp = data.filter(el => {
		return Object.values(el).some(e => new RegExp(`${search.value}`, 'i').test(e));
	});
	listUsers(temp);
}

function renderHTML(name, location, medium) {
	return `
 <li class="user">
      <img src="${medium}">
      <div class="info">
          <h4>${name}</h4>
          <p>${location}</p>
      </div>
  </li>
  `;
}

(async function fetch() {
	search.value = '';
	const {
		data: { results },
	} = await axios.get(URL, parameters);
	results.forEach(el => {
		const {
			name: { title, first, last },
			location: { city, country },
			picture: { medium },
		} = el;
		const name = concatName(title, first, last);
		const location = concatLocation(city, country);
		data.push({ name, location, medium });
	});
	users.innerHTML = '';
	listUsers(data);
	search.addEventListener('keyup', filter);
})();
