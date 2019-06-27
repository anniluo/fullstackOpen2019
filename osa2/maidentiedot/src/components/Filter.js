import React from 'react';

const Filter = ({handleInputChange, filterInput}) => {
    return (
        <div>
            <br />
            Find countries: <input 
                                value={filterInput} 
                                onChange={handleInputChange}
                            />
        </div>
    )
}

export default Filter