'use strict';
const main = document.querySelector('main');
const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');

[btnOpen, btnClose].forEach(e =>
	e.addEventListener('click', () => main.classList.toggle('show-nav')),
);
