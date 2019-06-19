import React, { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Mike Eagle', number: '555 0505051'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addContact = (event) => {
        event.preventDefault()
        
        if (persons.find(person => person.name === newName)) {
            window.alert(`${newName} is already in the Phonebook!`)   
        } else {
            const nameObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(nameObject))
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const rows = () => persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addContact}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type='submit'>add contact</button>
                </div>
            </form>
            <h2>Contacts</h2>
            <div>
                <ul>
                    {rows()}
                </ul>
            </div>
        </div>
    )
}

export default App;