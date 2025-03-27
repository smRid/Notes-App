import AppController from "./AppController.js";
import UIController from "./UIController.js";

class Controller {
    constructor() {
        this.UIController = new UIController();
        this.newNotes = [];
        this.openForm();
        this.createNoteData();
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
    
            // Get the current date
            const currDate = new Date().toLocaleDateString('en-GB');

            // Check if the title and text are empty
            if (noteTitle.value === '' || noteText.value === '') {
                alert('Please fill in both title and text fields.');
                return;
            }
    
            // Create a new note object
            const note = new AppController(noteTitle.value, noteText.value, currDate);
    
            console.log('New note created:', note); // Debugging log
    
            // Add the note to the list and UI
            this.newNotes.push(note);
            createNoteHTML(note, noteFiles);
    
        })  
            newNote.classList.remove('active');
            console.log("Active class removed from newNote:", newNote.classList.contains('active'));
            noteTitle.value = '';
            noteText.value = '';

            noteText.addEventListener("keydown", (e) => {
                if (e.key === 'Enter'){
                    noteBtn.click();
            }
        });
    }
}


export default Controller;