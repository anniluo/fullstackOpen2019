import React from 'react';

const ContactsList = ({contacts, handleDeleteClick}) => {
    const rows = () => contacts.map(contact => {
        return (
            <div key={contact.id} className='list-item-container'>
                <li>{contact.name} {contact.number}</li>
                <button onClick={() => handleDeleteClick(contact.id)}>delete</button>
            </div>
        )
    })

    return (
        <>
            <h2>Contacts</h2>
            <div>
                <ul>
                    {rows()}
                </ul>
            </div>
        </>
    )
    
}

export default ContactsList;