import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import contactService from './services/contacts'

const App = () => {
    const [contacts, setContacts] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [filterResult, setNewFilterResult] = useState([])

    useEffect(() => {
        contactService.getAll().then(contacts => setContacts(contacts))
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
        
        if (contacts.find(contact => contact.name === newName)) {
            window.alert(`${newName} is already in the Phonebook!`)
        } else {
            const contactObject = {
                name: newName,
                number: newNumber,
                id: contacts.length + 1
            }
    
            contactService.create(contactObject).then(returnedContact => {
                setContacts(contacts.concat(returnedContact))
                setNewName('')
                setNewNumber('')
            })
        }
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