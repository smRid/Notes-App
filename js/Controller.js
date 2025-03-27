import AppController from "./AppController.js";
import UIController from "./UIController.js";

class Controller {
    constructor() {
        this.UIController = new UIController();
        this.getData = JSON.parse(localStorage.getItem("noteData")) || [];
        this.setData = (data) => localStorage.setItem('noteData', JSON.stringify(data));
        this.openForm();
        this.createNoteData();
        this.createNoteUI();
        this.deleteNote();
        this.editNote();
    }

    openForm() {
        const { newNote } = this.UIController;

        const openFormFn = (e) => {
            e.preventDefault();
            newNote.classList.add('active');
            console.log("Active class added to newNote.");
        };

        const closeFormFn = (e) => {
            if (!e.target.closest(".new-note")) {
                newNote.classList.remove('active');
                console.log("Active class removed from newNote.");
            }
        };

        newNote.addEventListener('click', openFormFn);
        window.addEventListener('click', closeFormFn);
    }

    createNoteData() {
        const { newNote, noteFiles, noteTitle, noteText, noteBtn, createNoteHTML } = this.UIController;

        noteBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const currDate = new Date().toLocaleDateString('en-GB');

            if (noteTitle.value === '' || noteText.value === '') {
                alert('Please fill in both title and text fields.');
                return;
            }

            const note = new AppController(noteTitle.value, noteText.value, currDate);

            console.log('New note created:', note);

            this.getData.push(note);
            this.setData(this.getData); // Save to local storage
            createNoteHTML(note, noteFiles);

            // Reset the form and hide the note form UI
            newNote.classList.remove('active');
            console.log("Active class removed from newNote:", newNote.classList.contains('active'));
            noteTitle.value = '';
            noteText.value = '';

            this.deleteNote(); // Attach delete listeners to the new delete button
            this.editNote(); // Attach edit listeners to the new note elements
        });
    }

    createNoteUI(){
        const { createNoteHTML, noteFiles } = this.UIController;

        this.getData.forEach(noteData => {
            createNoteHTML(noteData, noteFiles);
        });
        
    }

    deleteNote() {
        const { noteFiles } = this.UIController;

        const notes = this.UIController.Notes();
        const deleteBtns = this.UIController.deleteBtns();

        deleteBtns.forEach((btn, i) => {
            btn.onclick = () => {
                noteFiles.removeChild(notes[i]);
                this.getData.splice(i, 1);
                this.setData(this.getData); 
                console.log(`Note ${i} deleted.`);
            };
        });
    }

    editNote() {
        const notes = this.UIController.Notes();

        notes.forEach((note, i) => {
            const noteTitle = note.querySelector('.title');
            const noteText = note.querySelector('.note-text');

            noteTitle.addEventListener('blur', () => {
                this.getData[i].title = noteTitle.textContent;
                this.setData(this.getData); 
                console.log(`Note ${i} title updated to: ${this.newNotes[i].title}`);
            });

            noteText.addEventListener('blur', () => {
                this.getData[i].text = noteText.textContent;
                this.setData(this.getData); 
                console.log(`Note ${i} text updated to: ${this.newNotes[i].text}`);
            });
        });
    }
}

export default Controller;