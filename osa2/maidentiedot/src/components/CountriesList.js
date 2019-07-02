import React from 'react';

const CountriesList = ({filterResult, setCountry, handleShowCountryClick}) => {

    const countryListElements = () => {
        if (filterResult.length > 10) {
            return <p>Too many matches, specify the search</p>
        }

        if (filterResult.length === 1) {
            setCountry(filterResult[0])
        }

        // return null if the array is empty
        if (filterResult.length === 0) {
            return null
        }

        return filterResult.map(result => {
            return (
                <div className='list-item-container' key={result.name}>
                    <li>{result.name}</li>
                    <button onClick={() => handleShowCountryClick(result.name)}>show info</button>
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