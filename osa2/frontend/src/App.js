import React, { useState } from 'react';
import Note from './components/Note';

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('Add a new note!')
    const [showAll, setShowAll] = useState(true)

    // conditional (ternary) operator/ehdollinen operaattori
    const notesToShow = showAll 
        ? notes 
        : notes.filter(note => note.important === true)

    const rows = () => notesToShow.map(note => 
        <Note 
            key={note.id} 
            note={note}
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

        // new note is added to the list with concat()
        // concat merges to or more arrays
        // concat does not change the existing arrays
        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    return (
        <div>
            <h1>Notes</h1>
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
        </div>
    )
}

export default App;


