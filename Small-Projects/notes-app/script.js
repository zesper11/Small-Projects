const headingText = document.querySelector('.notes-title');
const titlePreview = document.querySelector('.notes-small-title');
const datePreview = document.querySelector('.notes-small-updated');
const notesContantMain = document.querySelector('.notes-body');
//date setup
let presentDate = new Date();
let todaysMonth = presentDate.getMonth() + 1;
let todaysDate = presentDate.getDate();
let todaysYear = presentDate.getFullYear();
let updatedDate = `${todaysYear}-${todaysMonth}-${todaysDate}`;

let note = {
    Title:[],
    itemsUpdated:[],
    noteText:[],
}

let JSONnote = JSON.stringify(note);

function saveNote(){
    localStorage.setItem("headingTextStored" , headingText.value);
    localStorage.setItem("noteTextStored" , notesContantMain.value);
    localStorage.setItem("updatedDateStored" , updatedDate);
    titlePreview.textContent = localStorage.getItem("headingTextStored");
    datePreview.textContent = localStorage.getItem("updatedDateStored");
    notesContantMain.textContent = localStorage.getItem("noteTextStored");
}

document.addEventListener('DOMContentLoaded', function() {
    titlePreview.textContent = localStorage.getItem("headingTextStored");
    datePreview.textContent = localStorage.getItem("updatedDateStored");
    notesContantMain.textContent = localStorage.getItem("noteTextStored");
    document.querySelector('.notes-title').value = localStorage.getItem("headingTextStored");
});
