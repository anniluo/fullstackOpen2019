import React from 'react';

const CountryInfo = ({country, currentWeather}) => {    
    if (country === '') {
        return null
    }

    const languageList = () => {
        return country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)
    }

    const weatherDisplay = () => {
        if (currentWeather === '') {
            return null
        }

        return (
            <>
                <h3>Current weather in {country.capital}, {country.name}</h3>
                <p>temperature: {currentWeather.current.temp_c} Celsius</p>
                <img src={currentWeather.current.condition.icon} alt='current weather'/>
                <p>{currentWeather.current.condition.text}</p>
                
            </>
        )
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
                {weatherDisplay()}
            </div>
        </>
    )
}

export default CountryInfo