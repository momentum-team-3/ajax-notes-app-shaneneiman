// Set dbNotes to the URL for the database
const dbNotes = "http://localhost:3000/notes/"

// Data Validation and Object Creation
function validate (note, title, body) {
    console.log(note)
    for (let n of note) {
        if (n.title === title) {
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

//Single Page Web Application Event Handlers
//New Note
function makeNewNoteVisible () {
    let newNoteSection = document.querySelector("#new-note-section")
    let viewNotesSection = document.querySelector("#view-notes-section")
    newNoteSection.classList.remove("hidden")
    viewNotesSection.classList.add("hidden")
}

//View Notes
function makeViewNoteVisible () {
    let viewNotesSection = document.querySelector("#view-notes-section")
    let newNotesSection = document.querySelector("#new-note-section")
    viewNotesSection.classList.remove("hidden")
    newNotesSection.classList.add("hidden")
    
}

//Event Handler to Display Notes in Database
function displayNotes () {
    let viewNotesSection = document.querySelector("#view-notes-section")
    viewNotesSection.innerHTML=""
    fetch(dbNotes)
    .then(response => response.json())
    .then(note => {
        for (let n of note) {
            let title = n.title
            let body = n.body
            let noteEntry = document.createElement("form")
            noteEntry.innerHTML = `<div> <label for="entry-note-title"></label> <input id="entry-note-title" type="text" name="entry-note-title" value= ${title} required> </div> <div> <label for="entry-note-body"></label> <input id="entry-note-body" type="text" name="entry-note-body" value= "${body}" required> </div> <div> <input id="submit-changes-form-buttom" type="submit" value="Submit Changes"> <input id="delete-form-button" type="submit" value="Delete Note"> </div>`
            viewNotesSection.appendChild(noteEntry)
        }
    })
} 

//Event Listeners to hide and show content
//New Note 
let newNoteNav = document.querySelector("#new-note-navButton")
newNoteNav.addEventListener("click", makeNewNoteVisible)

//View Notes
let viewNotesNav = document.querySelector("#view-notes-navButton")
viewNotesNav.addEventListener("click", makeViewNoteVisible)


// Event Listener to submit new note
let newNoteForm = document.querySelector("#new-note")
newNoteForm.addEventListener("submit", addNote)

//Event Listener to load notes onto the screen from the DB
let displayDbNotes = document
displayDbNotes.addEventListener("DOMContentLoaded", displayNotes)

