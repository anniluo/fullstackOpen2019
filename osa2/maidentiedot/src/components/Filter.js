import React from 'react';

const Filter = ({handleInputChange, filterInput}) => {
    return (
        <>
            <br />
            Find countries: <input 
                                value={filterInput} 
                                onChange={handleInputChange}
                            />
        </>
    )
}

export default Filter