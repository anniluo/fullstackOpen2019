import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Mike Eagle', number: '555 0505051'},
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [filterResult, setNewFilterResult] = useState([])

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        let filterInput = event.target.value
        setFilter(filterInput)
        let re = new RegExp(`${filterInput}`, 'gi')

        setNewFilterResult(persons.filter(person => {
            return person.name.match(re)
        }))
    }

    const addContact = (event) => {
        event.preventDefault()
        
        persons.find(person => person.name === newName 
        ? window.alert(`${newName} is already in the Phonebook!`)
        : setPersons(persons.concat({name: newName, number: newNumber})))
    }

  return (
    <div>
        <h2>Phonebook</h2>
        <Filter 
            filter={filter} 
            handleFilterChange={handleFilterChange}
            filterResult={filterResult}
        />
        <ContactForm 
            addContact={addContact}
            newName={newName}
            handleNameChange={handleNameChange} 
            newNumber={newNumber} 
            handleNumberChange={handleNumberChange}
        />
        <ContactsList persons={persons}/>
    </div>
  )
}

export default App;