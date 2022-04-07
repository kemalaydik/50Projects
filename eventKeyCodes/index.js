const btnAction = document.querySelector('.action');

document.addEventListener('keydown', function (e) {
	const buttons = document.querySelectorAll('button');
	buttons.forEach(e => e.remove());
	['key', 'charCode', 'keyCode'].forEach(prop => {
		const tempBtn = document.createElement('button');
		tempBtn.innerText = `${prop}
		${e[prop] === ' ' ? 'space' : e[prop]}`;
		document.body.appendChild(tempBtn);
	});
});
