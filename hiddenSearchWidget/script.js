'use strict';

const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
	input.focus();

	search.classList.toggle('active');
});
