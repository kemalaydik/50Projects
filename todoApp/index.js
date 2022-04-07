const btnAdd = document.getElementById('add-note');
const notesEl = document.getElementById('notes');

function renderNote(text) {
	return `<div class="page edit">
						<i class="fa fa-edit" aria-hidden="true"></i>
						<textarea class="note">${text || ''}</textarea>
						<div class="render hidden"></div>
						<i class="fa fa-trash-can" aria-hidden="true"></i>
				</div>`;
}

function updateLS() {
	localStorage.removeItem('notes');
	const arr = Array.from(document.querySelectorAll('.note')).map(e => e.value);
	localStorage.setItem('notes', JSON.stringify(arr));
}

function renderLS() {
	if (localStorage.notes) {
		JSON.parse(localStorage.getItem('notes')).forEach(el => {
			notesEl.insertAdjacentHTML('beforeend', renderNote(el));
			document.querySelectorAll('.render').forEach(e => e.classList.remove('hidden'));
			document.querySelectorAll('.page').forEach(e => e.classList.remove('edit'));
			document.querySelectorAll('.note').forEach(e => {
				e.nextElementSibling.innerHTML = marked.parse(e.value);
				e.classList.add('hidden');
			});
		});
	}
}

renderLS();

document.addEventListener('click', e => {
	if (e.target.classList.contains('fa-trash-can')) {
		e.target.closest('.page').remove();
		updateLS();
	}
});

document.addEventListener('click', e => {
	if (e.target.classList.contains('fa-edit')) {
		const noteEl = e.target.nextElementSibling;
		const renderEl = noteEl.nextElementSibling;
		const pageEl = noteEl.parentElement;
		noteEl.classList.toggle('hidden');
		renderEl.classList.toggle('hidden');
		pageEl.classList.toggle('edit');
		if (noteEl.classList.contains('hidden')) {
			renderEl.innerHTML = marked.parse(noteEl.value);
			updateLS();
		}
	}
});

btnAdd.addEventListener('click', () => {
	notesEl.insertAdjacentHTML('beforeend', renderNote());
});
