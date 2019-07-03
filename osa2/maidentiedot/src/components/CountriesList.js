import React from 'react';

const CountriesList = ({filterResult, handleShowCountry}) => {
    const countryListElements = () => {
        if (filterResult.length === 0) {
            return null
        }

        if (filterResult.length > 10) {
            return <p>Too many matches, specify the search</p>
        }

        return filterResult.map(result => {
            return (
                <div className='list-item-container' key={result.name}>
                    <li>{result.name}</li>
                    <button onClick={() => handleShowCountry(result)}>show info</button>
                </div>
            ) 
        })
    }

    return (
        <>
            <ul>
                {countryListElements()}
            </ul>
        </>
    )
}

export default CountriesList