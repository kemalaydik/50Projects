const btn = document.querySelector('button');
const question = document.querySelector('.question');
let idx = 0;
let answersCorrect = 0;

const questions = [
	{
		question: 'Shrimp can swim backwards.',
		answerCorrect: 'True',
		answersIncorrect: ['False'],
	},
	{
		question: 'When was Steam first released?',
		answerCorrect: '2003',
		answersIncorrect: ['2004', '2011', '2007'],
	},
	{
		question: 'The Xenomorph from the science fiction film &quot;Alien&quot; has acidic blood.',
		answerCorrect: 'True',
		answersIncorrect: ['False'],
	},
	{
		question: 'Which one of the following is NOT a sub-company of the Volkswagen Group?',
		answerCorrect: 'Opel',
		answersIncorrect: ['Porsche', 'Bugatti', 'Bentley'],
	},
	{
		question: 'In Star Trek, what is the name of Spock&#039;s father?',
		answerCorrect: 'Sarek',
		answersIncorrect: ['Tuvok', 'T&#039;Pal', 'Surak'],
	},
	{
		question: 'Who was the director of &quot;Scott Pilgrim vs. the World (2010)&quot;?',
		answerCorrect: 'Edgar Wright',
		answersIncorrect: ['Phil Lord', 'Chris Miller', 'Seth Rogan'],
	},
	{
		question: 'Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.',
		answerCorrect: 'True',
		answersIncorrect: ['False'],
	},
	{
		question: 'The website &quot;Shut Up &amp; Sit Down&quot; reviews which form of media?',
		answerCorrect: 'Board Games',
		answersIncorrect: ['Television Shows', 'Video Games', 'Films'],
	},
	{
		question: 'An isosceles triangle has two sides of equal length as opposed to three.',
		answerCorrect: 'True',
		answersIncorrect: ['False'],
	},
	{
		question: 'In &quot;Resident Evil 2&quot;, which virus was William Birkin mutated by?',
		answerCorrect: 'G-Virus',
		answersIncorrect: ['T-Virus', 'C-Virus', 'E-Virus'],
	},
];

function renderHTML(idx) {
	return (
		`<h5>${questions[idx].question}</h5>` +
		[...questions[idx].answersIncorrect, questions[idx].answerCorrect]
			.sort(() => Math.random() - 0.5)
			.reduce((ac, el, idx) => {
				return (
					ac +
					`<div class="answer">
                <input type="radio" id="rb${idx}" name="answers">
                <label for="rb${idx}">${el}</label>
            </div>`
				);
			}, '')
	);
}

function renderScore() {
	return `<p>You replied ${answersCorrect} out of ${questions.length} </p>`;
}

function nextQuestion() {
	question.innerHTML = '';
	question.insertAdjacentHTML('afterbegin', idx !== questions.length ? renderHTML(idx) : renderScore());
	idx++;
}

nextQuestion();

btn.addEventListener('click', () => {
	const answer = [...document.querySelectorAll('input')].find(e => e.checked).nextElementSibling.innerText;
	if (answer) {
		if (answer === questions[idx - 1].answerCorrect) {
			answersCorrect++;
		}
		nextQuestion();
	}
});
