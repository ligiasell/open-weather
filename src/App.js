import React, { useState } from 'react'
import axios from 'axios'

import Header from './components/header'

import './App.css'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [data, setData] = useState()
  const [location, setLocation] = useState('')

  const handleInputChange = (event) => {
    const { value } = event.target
    setLocation(value)
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
  const handleSearch = () => {
    axios.get(url).then((response) => {
      setData(response.data)
    })
    setLocation('')
  }

  return (
    <div className="app" data-testid="app">
      <Header location={location} onChange={handleInputChange} onClick={handleSearch} />
      <section>
        {data === undefined ? (
          <h1 className="app-text-big center">Search for a location</h1>
        ) : (
          <div className="app-container">
            <h1 className="app-title-name center">{data?.name}</h1>
            <h2 className="app-temp app-text-big center">{data?.main?.temp} K</h2>
            <h3 className="app-title-min app-text-small">Min. Temperature</h3>
            <p className="app-min app-text-medium">{data?.main?.temp_min} K</p>
            <h3 className="app-title-max app-text-small">Max. Temperature</h3>
            <p className="app-max app-text-medium">{data?.main?.temp_max} K</p>
            <h3 className="app-title-feels app-text-small">Thermal sensation</h3>
            <p className="app-feels app-text-medium">{data?.main?.feels_like} K</p>
            <h3 className="app-title-hum app-text-small">Humidity</h3>
            <p className="app-hum app-text-medium">{data?.main?.humidity}%</p>
          </div>
        )}
      </section>
      <footer className="app-footer center">Powered with Open Weather</footer>
    </div>
  )
}

export default App
