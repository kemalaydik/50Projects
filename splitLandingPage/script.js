'use strict';

const splits = document.querySelectorAll('.split');
splits.forEach(e =>
	e.addEventListener('mouseover', function () {
		this.classList.add('active');
	}),
);
splits.forEach(e =>
	e.addEventListener('mouseleave', function () {
		this.classList.remove('active');
	}),
);



