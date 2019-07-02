import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import CountriesList from './components/CountriesList';
import CountryInfo from './components/CountryInfo';
import countryService from './services/countries';

const App = () => {
    const [countries, setCountries] = useState([])
    const [filterInput, setFilterInput] = useState('search by country')
    const [filterResult, setFilterResult] = useState([])
    const [country, setCountry] = useState('')

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
        setFilterResult(countries.filter(country => {
            return country.name.match(rx)
        }))
    }

    const handleShowCountryClick = name => {
        setCountry(countries.find(country => country.name === name))
    }

    return (
        <>
            <Filter 
                handleInputChange={handleInputChange} 
                input={filterInput}
            />
            <CountriesList
                filterResult={filterResult}
                setCountry={setCountry}
                input={filterInput}
                handleShowCountryClick={handleShowCountryClick}
            />
            <CountryInfo country={country}/>
        </>
    )
}

export default App