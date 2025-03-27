import AppController from "./AppController.js";
import UIController from "./UIController.js";

class Controller {
    constructor() {
        this.UIController = new UIController();
        this.openForm();
    }

    openForm() {
        const { newNote } = this.UIController;


        const openFormFn = (e) => {
            e.preventDefault();
            newNote.classList.add('active');
            console.log("Active class added to newNote.");

            window.addEventListener('click', (e) => {
                !e.target.closest(".new-note")  && newNote.classList.remove('active');
        });
        }
        newNote.addEventListener('click', openFormFn);
        
    }
}

export default Controller;