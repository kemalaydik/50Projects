'use strict';
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes();

function checkboxes() {
	const triggerBottom = (window.innerHeight * 4) / 5;
	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top;
		if (boxTop < triggerBottom) box.classList.add('show');
		else box.classList.remove('show');
	});
}
