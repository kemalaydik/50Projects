const testimony = document.querySelector('.testimony>p');
const name = document.querySelector('.name-title>p:first-child');
const title = document.querySelector('.name-title>p:last-child');
const img = document.querySelector('.person-info>img');
const bar = document.querySelector('.progress-bar');
let idx = 0;

const testimonials = [
	{
		testimony: 'Responsiveness and client service are what keep me coming back to Array. It is great to know that they have our back in times of crisis. ',
		imageUrl: 'https://picsum.photos/200',
		name: 'Rene Bartz',
		title: 'Receptionist',
	},
	{
		testimony:
			'My firm has been working with Array for over 5 years, we all know every case does not settle but the mediators from Array refuse to accept that. Each of them exhaust every possible avenue, creatively think out of the box, finally, we always get follow-up and are never charged for that extra effort. Service the old fashioned way-EFFORT! ',
		imageUrl: 'https://picsum.photos/200',
		name: 'Hasan Börek',
		title: 'Börekçi',
	},
	{
		testimony:
			'We hired Array to help us on document review for a bankruptcy matter. They jumped into action, immediately engaged our case team and got started on the review in record time. Status updates were provided on a regular basis and any potential issues were quickly escalated. This group knows how to keep document review on the tracks and get it over the finish line. ',
		imageUrl: 'https://picsum.photos/200',
		name: 'Enes Cihan',
		title: 'Matbaacı',
	},
	{
		testimony:
			'I have worked with members of this company for years. They perform quickly while providing accurate and very efficient work product. Array is definitely my preferred e-discovery vendor. ',
		imageUrl: 'https://picsum.photos/200',
		name: 'Sumer  Cip',
		title: 'Paki',
	},
];

function loadTestimony() {
	testimony.innerText = testimonials[idx].testimony;
	name.innerText = testimonials[idx].name;
	title.innerText = testimonials[idx].title;
	img.setAttribute('src', testimonials[idx].imageUrl);
	idx = ++idx % testimonials.length;
}

// loadTestimony();

setInterval(loadTestimony, 4000);
