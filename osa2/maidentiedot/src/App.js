import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import CountriesList from './components/CountriesList';
import countryService from './services/countries';
import CountryInfo from './components/CountryInfo';

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

    return (
        <div>
            <Filter 
                handleInputChange={handleInputChange} 
                input={filterInput}
            />
            <CountriesList
                filterResult={filterResult}
                setCountry={setCountry}
                input={filterInput}
            />
            <CountryInfo country={country}/>
        </div>
    )
}

export default App