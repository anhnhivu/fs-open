import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'https://restcountries.eu/rest/v2/all'
//const api_key = process.env.REACT_APP_API_KEY
// const api_key = 't0p53cr3t4p1k3yv4lu3'

// const getWeatherData = async (location) => {
//   const weatherUrl = "https://api.weatherstack.com/current"
  
//   const { data } = await axios.get(weatherUrl, {
//     params: {
//       query: location,
//       units: "m",
//       access_key: api_key,
//     },
//   })
//   console.log(data)
//   return data
// }


const Country = (props) => {
  const [show, setShow] = useState(false)
  //console.log(show)
  return (
    <div>
        {props.name}   &ensp;
        <button onClick={() => setShow(true)}        
        >show</button>

        {show ? <CountryDetails country={props.country}/> : null}
    </div>
  )
}

const CountryDetails = ({country}) => {

  // const weatherData = getWeatherData(country.name)
  // console.log(weatherData)

  return (
    <div>
      <h1>{country.name}</h1>

      <p>capital {country.capital}</p>
      <p>population {country.population}</p>

      <h2>languages</h2>
      <ul>
        {country.languages.map(language =>
          <li key={language.name}>{language.name}</li>
      )}
      </ul>

      <img src={country.flag} alt="flag" width="200px"/>

      <h2>Weather in {country.name}</h2>
      <p>
        <b>temperature: </b> Celsius
      </p>
      <p>
        <b>wind: </b> mph direction 
      </p>

    </div>
  )
}

const Form = (props) => {
  return (
    <div>
      <form>
      find countries  &ensp;
          <input value = {props.pattern}
            onChange={(event) => {
              props.setPattern(event.target.value)
            }
          }
          ></input>
      </form>
    </div>
  )
}

const Find = (props) => {
  const countries = props.countriesToShow
  //console.log(countries)
  
  if (countries.length > 10) {
    return (
      <div>
        <Form pattern={props.pattern} setPattern={props.setPattern}/>
        To many matches, specify another filter
      </div>
    )
  }
  else if (countries.length > 1) {
    return (
      <div>
         <Form pattern={props.pattern} setPattern={props.setPattern}/>
        {props.countriesToShow.map(country => 
        <Country name={country.name} country={country}
          key={country.name}/>
          )}
          
      </div>
    )
  }
  else if (countries.length === 1) {
    return (
      <div>
        <Form pattern={props.pattern} setPattern={props.setPattern}/>
        <CountryDetails country={countries[0]}/>
      </div>
    )
  }

  return (
    <div>
      <Form pattern={props.pattern} setPattern={props.setPattern}/>
    </div>
  )
  
}

const App = () => {

  //const [weather, setWeather] = useState([])
  const [ countries,  setCountries ] = useState([])
  const [ pattern, setPattern ] = useState('')

  const regex = new RegExp(`${pattern}`, "i")
  const countriesToShow = pattern ? countries.filter(country =>
                        country.name.match(regex) ) : []

  
  // Effect Hooks
  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setCountries(response.data)
    })
  }, [])

  return (
    <div>
      <Find pattern={pattern} setPattern={setPattern}
      countriesToShow={countriesToShow}/>
    </div>
  )
}

export default App