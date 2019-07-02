import React from 'react';

const CountryInfo = ({country}) => {

    if (country === '') {
        return null
    }

    const languageList = () => {
        return country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)
    }

    return (
        <>
            <div>
                <h2>{country.name}</h2>
                <img className='flag' src={country.flag} alt={`flag of ${country.name}`}/>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
            </div>
            <div> 
                Languages:
                <ul>
                    {languageList()}
                </ul>
            </div>
            <div>
                <p>Weather in {country.capital}:</p>
            </div>
        </>
    )
}

export default CountryInfo