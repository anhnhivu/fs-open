import React, { useState, useEffect } from 'react'
import personService from './services/persons'

const Person = (props) => {
  return (
    <div>
      {props.name} {props.number} &ensp;
      <button type="submit" 
      onClick={(event) => props.deleteName(props.id, props.name, event)}
      >delete</button> 
    </div>
  )
}

const Filter = (props) => {
  return (
    <div>
        filter shown with <form>
          <input value = {props.pattern}
                onChange={(event) => {props.setPattern(event.target.value)}}
          />
          {props.namesToShow.map(person =>
          <Person key={person.id} 
                id={person.id}
                name={person.name}
                number={person.number} 
                deleteName={props.deleteName}/>
        )}
        </form>
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addName}>
      <div>
        name: <input 
                value={props.newName} 
                onChange={props.handleNameChange}
              />
      </div>
      <div>
        number: <input
                value={props.newNumber} 
                onChange={props.handleNumberChange}
              />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    </div>
  )
}

const Persons = (props) => {
  return (
    <div>
      
      {props.persons.map(person =>
        <Person key={person.id} 
          name={person.name} 
          number={person.number}
          id={person.id}
          deleteName={props.deleteName}
          />
      )}
    </div>
  )
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="error">
      {message}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ pattern, setPattern ] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  // Effect Hooks
  useEffect(() => {
    personService.getAll().then(
      initPerson => {
        setPersons(initPerson)
      }
    )
  }, [])

  const deleteName = (id, name, event) => {
    event.preventDefault()
    
    if (window.confirm(`Delete ${name} ?`) === true) {
      setPersons(persons.filter(p => p.id !== id))
      personService
      .del(id)
      .catch(error => {
        alert(
          `'${name}' was already deleted from server`
        )
      })
      setPattern('')
    }
  }

  const addName = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const nameObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      //id: persons.length + 1,
    }

    var pos = -1
    for (var i=0; i < persons.length; i++) {
      if (persons[i].name === newName) {
          pos = i;
      }
    }
    console.log(pos)

    if (pos !== -1) {
      alert(`${nameObject.name} is already added to phonebook`)
    }
    else {
      personService
      .create(nameObject)
      .then(initPerson => {
        setPersons(persons.concat(initPerson))
        setNewName('')
        setNewNumber('')
      })
      .then(error => {
        setErrorMessage(
          `${newName}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })

    }
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const regex = new RegExp(`^${pattern}`, "i")
  const namesToShow = pattern ? persons.filter(person =>
                        person.name.match(regex) ) : []


  return (
    <div>
      <h1>Phonebook</h1>

     <Notification message={errorMessage}/>

     <Filter pattern={pattern} 
            setPattern={setPattern}
            namesToShow={namesToShow}
            deleteName={deleteName}/>

      <h2>add a new</h2>

      <PersonForm addName={addName}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
                  />
      
      <h3>Numbers</h3>

      <Persons persons={persons} setPersons={setPersons}
      deleteName={deleteName}/>

    </div>
  )
}

export default App