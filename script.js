// Set dbNotes to the URL for the database
const dbNotes = "http://localhost:3000/notes"

// Data Validation and Object Creation
function validate (note, title, body) {
    console.log(note)
    for (let n of note) {
        if (n.title = title) {
            alert("A note already exists with this title")
            //Leave event handler function without sumbitting
            return
        }
    }
    //Create object for database
    let addNoteRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": title,
            "body": body,
        })
    }
    fetch(dbNotes, addNoteRequest).then(() => alert("Note has been added"))
}

// Event Handlers
function addNote (event) {
    event.preventDefault()
    let titleInput = document.querySelector("#note-title")
    let bodyInput = document.querySelector("#note-body")
    titleValue = titleInput.value
    bodyValue = bodyInput.value
    
    fetch(dbNotes)
    .then (response => response.json())
    .then (data => validate (data, titleValue, bodyValue))
}

function editNote (event) {
    event.preventDefault()
}

function deleteNote (event) {
    event.preventDefault()
}

// Event Listener to submit new note
let newNoteForm = document.querySelector("#new-note")
newNoteForm.addEventListener("submit", addNote)