const html = document.querySelector('html');
const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', () => {
	toggle.innerText = toggle.innerText === 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
	html.classList.toggle('dark');
});

const now = new Date();
let minute = now.getMinutes() * 6;
let hour = ((now.getHours() % 12) + minute / 360) * 30;
let second = now.getSeconds() * 6;
let time = now.getDay();
let month = now.getMonth();
let date = now.getDate();

function pad(num) {
	if (num < 10) return '0' + num;
	return num;
}

function setTime() {
	secondEl.style.transform = `translate(-50%, -100%) rotate(${second}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${minute}deg)`;
	hourEl.style.transform = `translate(-50%, -100%) rotate(${hour}deg)`;
	second = (second + 6) % 360;
	minute = (minute + 1 / 60) % 360;
	hour = (hour + 1 / 120) % 360;
	timeEl.innerText = pad(~~(hour / 30)) + ':' + pad(~~(minute / 6));
	dateEl.innerHTML = `${days[time]}, ${months[month]} <span class="circle">${date}</span>`;
}

setInterval(setTime, 1000);
