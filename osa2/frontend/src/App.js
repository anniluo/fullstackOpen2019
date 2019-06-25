import React, { useState, useEffect } from 'react';
import noteService from './services/notes';
import Note from './components/Note';
import Notification from './components/Notification';
import Footer from './components/Footer';

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('Add a new note!')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('error occured')

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    })

    // conditional (ternary) operator/ehdollinen operaattori
    const notesToShow = showAll 
        ? notes 
        : notes.filter(note => note.important === true)

    const rows = () => notesToShow.map(note => 
        <Note 
            key={note.id} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
        />
    )

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1, 
        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                // new note is added to the list with concat()
                // concat merges to or more arrays
                // concat does not change the existing arrays
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            })
        }

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        // luo uuden olion, jonka sisältö on sama 
        // lukuunottamatta arvoa important
        const changedNote = {...note, important: !note.important}

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
            // tilaan asetetaan kaikki vanhat muistiinpanot
            // paitsi muuttuneen, jonka tilaksi asetetaan
            // palvelimen palauttava data
            setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })
            .catch(error => {
                setErrorMessage(
                    `Note '${note.content}' was already removed from the server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage}/>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {rows()}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type='submit'>save</button>
            </form>
            <Footer/>
        </div>
    )
}

export default App;


