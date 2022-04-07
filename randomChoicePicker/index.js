const textArea = document.getElementById('choices');
const choicesContainer = document.querySelector('.buttons');
textArea.value = '';
textArea.focus();
textArea.addEventListener('keyup', e => {
	if (e.key === 'Enter') {
		selectChoice();
		return;
	}
	choicesContainer.innerHTML = '';
	textArea.value
		.split(',')
		.filter(e => e !== '')
		.forEach(e => {
			const btn = document.createElement('button');
			btn.innerText = e;
			choicesContainer.appendChild(btn);
		});
});

function selectChoice() {
	const choices = choicesContainer.querySelectorAll('button');
	let temp = 0;
	const interval = setInterval(() => {
		choices[temp].classList.remove('selected');
		const rnd = ~~(Math.random() * choices.length);
		choices[rnd].classList.add('selected');
		temp = rnd;
	}, 1000 / choices.length);
	setTimeout(() => {
		clearInterval(interval);
	}, 1000);
	textArea.value = '';
}
