import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import axios from 'axios';

const App = () => {
    const [contacts, setContacts] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [filterResult, setNewFilterResult] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/contacts')
            .then(response => {
            setContacts(response.data)
        })
    }, [])

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

        setNewFilterResult(contacts.filter(contact => {
            return contact.name.match(re)
        }))
    }

    const addContact = (event) => {
        event.preventDefault()
        
        contacts.find(contact => contact.name === newName 
        ? window.alert(`${newName} is already in the Phonebook!`)
        : setContacts(contacts.concat({
            name: newName, number: newNumber, id: contacts.length + 1})))
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
        <ContactsList contacts={contacts}/>
    </div>
  )
}

export default App;