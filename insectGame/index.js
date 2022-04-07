const screens = document.querySelectorAll('.screen');
const insectsUl = document.querySelector('.insects');
const startBtn = document.querySelector('.start-button');
const insects = document.querySelector('.insects-container');
const screen = document.querySelector('.game-container');
const scoreEl = document.getElementById('score');
const secondEl = document.querySelector('#time>span:last-child');
const minuteEl = document.querySelector('#time>span:first-child');
const message = document.getElementById('message');
let selected;
let score = 0;
let seconds = 0;
let minutes = 0;

function randomLocX() {
	return ~~(Math.random() * 81) + 5 + '%';
}
function randomLocY() {
	return ~~(Math.random() * 81) + 5 + '%';
}
function randomDeg() {
	return ~~(Math.random() * 360) + 'deg';
}

function setTime() {
	seconds = ++seconds;
	if (seconds === 60) ++minutes;
	seconds = seconds % 60;
	secondEl.innerText = seconds.toString().padStart(2, '0');
	minuteEl.innerText = minutes.toString().padStart(2, '0');
}

function loadInsect() {
	const insect = document.createElement('img');
	insect.setAttribute('src', selected);
	insect.style.left = randomLocX();
	insect.style.top = randomLocY();
	insect.style.rotate = randomDeg();
	insects.appendChild(insect);
}

startBtn.addEventListener('click', () => {
	screens[0].classList.add('up');
});

insectsUl.addEventListener('click', e => {
	if (e.target.parentElement.className === 'choose-insect-btn') {
		screens[1].classList.add('up');
		selected = e.target.closest('img').src;
		loadInsect();
		setInterval(setTime, 1000);
	}
});

insects.addEventListener('click', e => {
	if (e.target.src) {
		e.target.remove();
		loadInsect();
		loadInsect();
		scoreEl.innerText = 'Score: ' + ++score;
		if (score === 20) message.classList.toggle('visible');
	}
});
