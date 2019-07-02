import React from 'react';

const Notification = ({errorMessage, successMessage}) => {
    if (errorMessage === null && successMessage === null) {
        return null
    }

    const notificationClass = errorMessage === null ? 'success-message' : 'error-message'

    if (errorMessage !== null && successMessage === null) {
        return (
            <div className={notificationClass}>
                {errorMessage}
            </div>
        )
    }
    
    return (
        <div className={notificationClass}>
            {successMessage}
        </div>
    )
}

export default Notification