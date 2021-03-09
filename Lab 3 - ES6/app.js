class Note {
    constructor(title) {
        this.title = title;
        this.element = this.createElement(this.title);
    }
    // HINT🤩 this.element = this.createElement(title);


    createElement(title) {
        let newNote = document.createElement("li");
        newNote.innerHTML = title;
        newNote.addEventListener('click', this.remove.bind(newNote));
        return newNote;
    }
    // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

    add() {
        document.querySelector("#taskList").appendChild(this.element);
        // HINT🤩
        // this function should append the note to the screen somehow
    }

    saveToStorage() {
        // HINT🤩
        // localStorage only supports strings, not arrays
        // if you want to store arrays, look at JSON.parse and JSON.stringify
    }

    remove() {
        // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
        // in this function, 'this' will refer to the current note element
        // .removeChild(this)
        // remove the item from screen and from localstorage
    }
}

class App {
    constructor() {
        this.txtTodo = document.querySelector("#taskInput");
        this.txtTodo.addEventListener("keypress", this.createNote.bind(this));

        this.loadNotesFromStorage();
    }
    // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    // this.txtTodo = ???
    // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    // this.loadNotesFromStorage();

    loadNotesFromStorage() {
        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes);

        if (notes !== null) {

            notes.forEach(title => {
                let newNote = new Note(title);
                newNote.add();
            });

        }
    }
    // HINT🤩
    // load all notes from storage here and add them to the screen


    createNote(event) {
        if (this.txtTodo.value !== "") {

            if (event.key === "Enter") {
                event.preventDefault();

                let note = new Note(this.txtTodo.value);
                note.add();
                note.saveToStorage();

                this.reset();
            }

        }
    }
    // this function should create a new note by using the Note() class
    // HINT🤩
    // if (e.key === "Enter")
    // note.add();
    // note.saveToStorage();
    // clear the text field with .reset in this class

    reset() {
        this.txtTodo.value = "";
    }
    // this function should reset the form / clear the text field

}

let app = new App();
