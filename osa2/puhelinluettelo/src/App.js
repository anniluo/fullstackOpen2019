import React, { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Mike Eagle'}
    ])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        
        if (persons.find(person => person.name === newName)) {
            window.alert(`${newName} is already in the Phonebook!`)   
        } else {
            const nameObject = {
                name: newName
            }
            setPersons(persons.concat(nameObject))
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const rows = () => persons.map(person => <li key={person.name}>{person.name}</li>)

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type='submit'>add name</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                <ul>
                    {rows()}
                </ul>
            </div>
        </div>
    )
}

export default App;