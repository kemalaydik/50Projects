'use strict';

const progressBar = document.querySelector('.progress');
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
let currentActive = 1;

function update() {
	const perc = ((currentActive - 1) / (circles.length - 1)) * 100;
	progressBar.style.width = `${perc}%`;
}

function incProgress() {
	if (currentActive === 4) return;
	if (currentActive === 1) btnPrev.disabled = false;
	if (currentActive === 3) btnNext.disabled = true;
	currentActive++;
	update();
	circles[currentActive - 1].classList.add('active');
}

function decProgress() {
	if (currentActive === 1) return;
	if (currentActive === 4) btnNext.disabled = false;
	if (currentActive === 2) btnPrev.disabled = true;
	currentActive--;
	const perc = ((currentActive - 1) / (circles.length - 1)) * 100;
	progressBar.style.width = `${perc}%`;
	update();
	circles[currentActive].classList.remove('active');
}

btnNext.addEventListener('click', function () {
	incProgress();
});
btnPrev.addEventListener('click', function () {
	decProgress();
});
