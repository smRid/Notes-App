class UIController {
    constructor() {
        this.newNote = document.querySelector('.new-note'); 
        this.noteFiles = document.querySelector('.note-files');
        this.noteForm = document.querySelector('.note-form'); 
        this.noteTtile = document.querySelector('.title-input'); 
        this.noteText = document.querySelector('.note-text-input'); 
        this.noteBtn = document.querySelector('.note-btn'); 

    }
}

export default UIController;