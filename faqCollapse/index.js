const btns = document.querySelectorAll('.faq-toggle');

// method1;
// document.addEventListener('click', e => {
// 	if (e.target.classList.contains('fa-times')) e.target.closest('.faq').classList.remove('active');
// 	if (e.target.classList.contains('fa-chevron-down'))
// 		e.target.closest('.faq').classList.add('active');
// });

// method 2

btns.forEach(toggle =>
	toggle.addEventListener('click', () => toggle.parentNode.classList.toggle('active')),
);
