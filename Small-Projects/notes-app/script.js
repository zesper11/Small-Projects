const headingText = document.querySelector('.notes-title');
const titlePreview = document.querySelector('.notes-small-title');
const datePreview = document.querySelector('.notes-small-updated');
//date setup
let presentDate = new Date();
let todaysMonth = presentDate.getMonth() + 1;
let todaysDate = presentDate.getDate();
let todaysYear = presentDate.getFullYear();
let updatedDate = `${todaysYear}-${todaysMonth}-${todaysDate}`;

let notesContantMain = document.querySelector('.notes-body');


let note = {
    itemsTitle:[],
    itemsParagraph:[],
    itemsUpdated:[],
    noteText:[],
}

let JSONnote = JSON.stringify(note);

function saveNote(){
    localStorage.setItem("headingTextStored" , headingText.value);
    localStorage.setItem("noteTextStored" , notesContantMain.value);
    localStorage.setItem("updatedDateStored" , updatedDate);
    titlePreview.textContent = headingText.textContent;
    datePreview.textContent = updatedDate;
}
