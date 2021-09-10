import React, { useState } from 'react'

const Person = (props) => {
  return (
    <div>
      {props.name} {props.number}
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
                name={person.name}
                number={person.number} />
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
          number={person.number}/>
      )}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ pattern, setPattern ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const nameObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
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
      setPersons(persons.concat(nameObject))
      console.log(persons)
      setNewName('')
      setNewNumber('')
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
      <h2>Phonebook</h2>

     <Filter pattern={pattern} 
            setPattern={setPattern}
            namesToShow={namesToShow}/>

      <h3>Add a new</h3>

      <PersonForm addName={addName}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
                  />
      
      <h3>Numbers</h3>

      <Persons persons={persons} />

    </div>
  )
}

export default App