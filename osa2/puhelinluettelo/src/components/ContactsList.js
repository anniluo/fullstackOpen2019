import React from 'react';

const ContactsList = ({contacts}) => {
    const rows = () => contacts.map(contact => {
        return (
            <li key={contact.id}>{contact.name} {contact.number}</li>
        )
    })

    return (
        <div>
            <h2>Contacts</h2>
            <div>
                <ul>
                    {rows()}
                </ul>
            </div>
        </div>
    )
    
}

export default ContactsList;