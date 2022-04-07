const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
	const btnTop = btn.offsetTop;
	const btnLeft = btn.offsetLeft;
	const ripple = document.createElement('span');
	ripple.classList.add('circle');
	ripple.style.top = e.clientY - btnTop + 'px';
	ripple.style.left = e.clientX - btnLeft + 'px';
	btn.appendChild(ripple);
	setTimeout(() => ripple.remove(), 500);
});
