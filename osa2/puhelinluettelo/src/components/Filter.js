import React from 'react';

const Filter = ({filter, handleFilterChange, filterResult}) => {
    const searchResultRows = () => {
        if (filter === '') {
            // if search input is empty, clear the searchResultRows
            return <div></div>
        }

        return filterResult.map(result => 
            <li key={result.name}>{result.name} {result.number}</li>)
    }

    return (
        <div>
            search by name: <input value={filter} onChange={handleFilterChange}/>
            <ul>
                {searchResultRows()}
            </ul>
        </div>
    )
}

export default Filter;