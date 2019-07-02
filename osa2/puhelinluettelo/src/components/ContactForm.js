import React from 'react';

const ContactForm = ({addContact, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <div className='form-container'>
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
        </div>
    )
}

export default ContactForm;