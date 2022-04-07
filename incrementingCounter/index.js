const counters = document.querySelectorAll('.brand > p:nth-child(2)');

counters.forEach((e, i) => {
	const target = e.getAttribute('data-target');
	let start = 0;
	const interval = setInterval(() => {
		start += target / 1000;
		e.innerText = start;
		if (start >= target) clearInterval(interval);
	}, 1);
});
