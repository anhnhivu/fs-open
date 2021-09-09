import React from 'react'

const Course = (props) => {
    return (
      <div>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
      </div>
    )
}
  
  const Header = (props) => {
    return (
      <div>
        <h1>
          {props.name}
        </h1>
      </div>
    )
  }
  
  const Content = (props) => {
    const { parts } = props
    return parts.map(part => <Part key={part.id} part={part} /> )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part.name} {props.part.exercises}</p>
      </div>
    )
  }
  
  const Total = (props) => {
    const { parts } = props
    const arr = parts.map(part => part.exercises)
    console.log(arr)
    const reducer = (sum, x) => sum + x
    const result = arr.reduce(reducer)
    console.log(result)
  
    return (
      <div>
        <p>
          <b>total of {result} exercises</b> 
        </p>
      </div>
    )
  }

export default Course