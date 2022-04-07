const btns = document.querySelectorAll('.arrow');
const slides = document.querySelectorAll('.slide');
const body = document.body;

let activeSlide = 0;

btns.forEach(e => e.addEventListener('click', paginate));

function paginate() {
	slides[activeSlide].classList.remove('active');
	activeSlide = this.classList.contains('left') ? (--activeSlide + 5) % 5 : (--activeSlide + 5) % 5;
	slides[activeSlide].classList.add('active');
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
