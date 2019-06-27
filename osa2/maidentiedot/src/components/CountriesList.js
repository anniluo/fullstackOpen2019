import React from 'react';

const CountriesList = ({filterResult, setCountry}) => {

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

        return filterResult.map(result => <li key={result.name}>{result.name}</li>)
    }

    return (
        <div>
            <ul>
                {countryListElements()}
            </ul>
        </div>
    )
}

export default CountriesList