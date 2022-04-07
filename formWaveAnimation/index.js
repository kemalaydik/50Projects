const inputEmail = document.querySelector('#email');
const inputPass = document.querySelector('#password');
const labels = document.querySelectorAll('.form-control > label');

function spanify(text) {
	return text.split('').reduce((p, n, i) => {
		p += `<span style="transition-delay:${i * 50}ms">${n}</span>`;
		return p;
	}, '');
}

labels.forEach(e => (e.innerHTML = spanify(e.innerText)));
