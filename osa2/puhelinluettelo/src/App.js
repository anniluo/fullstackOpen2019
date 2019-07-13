import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import contactService from './services/contacts'

const App = () => {
    const [contacts, setContacts] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [filterResult, setNewFilterResult] = useState([])
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        contactService
            .getAll()
            .then(contacts => setContacts(contacts))
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

    const handleDeleteClick = id => {
        const contact = contacts.find(contact => contact.id === id)

        if (window.confirm(`Delete contact information for ${contact.name}?`)) {
            contactService
                .drop(id)
                .then(response => {
                    setContacts(contacts.filter(contact => contact.id !== id))
                    setSuccessMessage(`Contact information for ${contact.name} deleted successfully.`)
                    setTimeout(() => {
                        setSuccessMessage(null)
                    }, 5000)
            })
            .catch(error => {
                setErrorMessage(`Request failed with an error message: ${error.message}`)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
        } 
    }

    const addContact = (event) => {
        event.preventDefault()
        const contact = contacts.find(contact => contact.name === newName)

        if (contact) {
            if (window.confirm(`Update contact information for ${contact.name}?`)) {
                const id = contact.id
                const changedContact = {...contact, number: newNumber}
                
                contactService
                    .update(id, changedContact)
                    .then(updatedContact => {
                        setContacts(contacts.map(contact => contact.id !== id ? contact : updatedContact))
                        setSuccessMessage(`Contact information updated for ${updatedContact.name} successfully.`)
                        setTimeout(() => {
                            setSuccessMessage(null)
                        }, 5000)
                    })
                    .catch(error => {
                        setErrorMessage(`Update failed with message: ${error.message}`)
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                        setContacts(contacts.filter(contact => contact.id !== id))
                    })
            }
        } else {
            const contactObject = {
                name: newName,
                number: newNumber,
                id: contacts.length + 1
            }
    
            contactService
                .create(contactObject).then(returnedContact => {
                    setContacts(contacts.concat(returnedContact))
                    setNewName('')
                    setNewNumber('')
                    setSuccessMessage(`New Contact added: ${returnedContact.name}.`)
                    setTimeout(() => {
                        setSuccessMessage(null)
                    },  5000)
                })
                .catch(error => {
                    setErrorMessage(`Creation failed with message: ${error.response.data.error}`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
            })
        }
    }

  return (
    <>
        <h2>Phonebook</h2>
        <Notification 
            errorMessage={errorMessage} 
            successMessage={successMessage}
        />
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
        <ContactsList 
            contacts={contacts}
            handleDeleteClick={handleDeleteClick}/>
    </>
  )
}

export default App;