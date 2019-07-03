import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import CountriesList from './components/CountriesList';
import CountryInfo from './components/CountryInfo';
import countryService from './services/countries';
import weatherService from './services/weather';

const App = () => {
    const [countries, setCountries] = useState([])
    const [filterInput, setFilterInput] = useState('search by country')
    const [filterResult, setFilterResult] = useState([])
    const [country, setCountry] = useState('')
    const [currentWeather, setCurrentWeather] = useState('')

    useEffect(() => {
        countryService
            .getAll()
            .then(initialCountries => {
            setCountries(initialCountries)
        })
    }, [])

    const handleInputChange = (event) => {
        event.preventDefault()
        setFilterInput(event.target.value)
        
        const rx = new RegExp(`${event.target.value}`, 'gi')
        const searchResult = countries.filter(country => {
            return country.name.match(rx)
        })

        if (searchResult.length === 1) {
            setCountry(searchResult[0])
        }
        setFilterResult(searchResult)
    }

    const handleShowCountry = country => {
        setCountry(country)
        weatherService
            .getWeather(country.capital)
            .then(initialWeather => {
                setCurrentWeather(initialWeather)
            })
    }

    return (
        <>
            <Filter 
                handleInputChange={handleInputChange} 
                input={filterInput}
            />
            <CountriesList
                filterResult={filterResult}
                handleShowCountry={handleShowCountry}
            />
            <CountryInfo 
                country={country}
                currentWeather={currentWeather}
            />
        </>
    )
}

export default App