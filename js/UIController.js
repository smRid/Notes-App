class UIController {
    constructor() {
        this.Notes = () =>[ ...document.querySelectorAll('note')]
        this.deleteBtn = [...document.querySelectorAll('.delete-btn')];
        this.newNote = document.querySelector('.new-note');
        this.noteFiles = document.querySelector('.note-files');
        this.noteTitle = document.querySelector('.title-input');
        this.noteText = document.querySelector('.note-text-input');
        this.noteBtn = document.querySelector('.note-btn');
    }

    createNoteHTML(note, noteFiles) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <h2 class="title">${note.title}</h2>
            <p class="note-text">${note.text}</p> <!-- Ensure the text is rendered here -->
            <div class="settings">
                <span class="date">${note.date}</span>
                <a href="#" class="delete-btn">
                    <i class="bx bxs-trash"></i>
                </a>
            </div>
        `;
        noteFiles.appendChild(noteElement);
    }
}

export default UIController;