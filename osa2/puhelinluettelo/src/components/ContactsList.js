import React from 'react';

const ContactsList = ({persons}) => {
    const rows = () => persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)

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