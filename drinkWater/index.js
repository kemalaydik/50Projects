const glasses = document.querySelectorAll('ul>li>div');
const empty = document.querySelector('.empty');
const full = document.querySelector('.full');

glasses.forEach((glass, i) =>
	glass.addEventListener('click', el => {
		full.style.height = (i + 1) * 12.5 + '%';
		full.innerHTML = `${(i + 1) * 12.5}%`;

		glasses.forEach((glass, idx) => {
			if (idx <= i && glass.classList.contains('active')) return;
			if (idx > i) glass.classList.remove('active');
			if (idx > i && !glass.classList.contains('active')) return;
			glass.classList.add('active');
		});
	}),
);
