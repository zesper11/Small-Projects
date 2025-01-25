const headingText = document.querySelector('.notes-title');
const notesContantMain = document.querySelector('.notes-body');

let notes = JSON.parse(localStorage.getItem('notes')) || [];
let currentNoteIndex = null;

function getFormattedDate() {
    const presentDate = new Date();
    const todaysMonth = presentDate.getMonth() + 1;
    const todaysDate = presentDate.getDate();
    const todaysYear = presentDate.getFullYear();
    return `${todaysYear}-${todaysMonth}-${todaysDate}`;
}

function saveNote() {
    if (currentNoteIndex === null) return;
    notes[currentNoteIndex] = {
        title: headingText.value,
        body: notesContantMain.value,
        date: getFormattedDate(),
    };
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

function renderNotes() {
    const notesSidebar = document.querySelector('.notes-sidebar');
    notesSidebar.innerHTML = `<button class="notes-add btn" type="button">Add Note</button>`;
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('notes-list', `note-${index}`);
        noteDiv.addEventListener('click', () => loadNote(index));

        const noteTitle = document.createElement('div');
        noteTitle.classList.add('notes-small-title');
        noteTitle.textContent = note.title || 'Untitled';

        const noteDate = document.createElement('div');
        noteDate.classList.add('notes-small-updated');
        noteDate.textContent = note.date;

        noteDiv.appendChild(noteTitle);
        noteDiv.appendChild(noteDate);
        notesSidebar.appendChild(noteDiv);
    });

    document.querySelector('.notes-add').addEventListener('click', addNote);
}

function addNote() {
    const newNote = {
        title: '',
        body: '',
        date: getFormattedDate(),
    };
    notes.push(newNote);
    currentNoteIndex = notes.length - 1;
    saveNote();
    renderNotes();
    loadNote(currentNoteIndex);
}

function loadNote(index) {
    const note = notes[index];
    if (!note) return;
    currentNoteIndex = index;
    headingText.value = note.title;
    notesContantMain.value = note.body;
}

document.addEventListener('DOMContentLoaded', () => {
    renderNotes();
    if (notes.length > 0) {
        loadNote(0);
    }
});
