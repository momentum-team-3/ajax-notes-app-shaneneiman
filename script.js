// Set dbNotes to the URL for the database
const dbNotes = "http://localhost:3000/notes/"


//Create object for database



// Event Handler Functions
function addNewNote (event) {
    event.preventDefault()
    let titleInput = document.querySelector("#note-title")
    let bodyInput = document.querySelector("#note-body")
    titleValue = titleInput.value
    bodyValue = bodyInput.value
    //fetch to add to DB
}

function editNote (event) {
    event.preventDefault()
}

function deleteNote (event) {
    event.preventDefault()
}

// Event Listener to submit new note
let newNoteForm = document.querySelector("#new-note")
newNoteForm.addEventListener("submit", addNewNote)