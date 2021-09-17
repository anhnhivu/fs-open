import React, { useState } from 'react'

const Header = (props) => {
  return (
  <h1>{props.title}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <div>
        <tr>
          <td width='60px'>{props.text}</td>
          <td>{props.value.toFixed(2)}%</td>
        </tr>
      </div>
    )
  }
  else if (props.text === 'average') {
      return (
        <div>
          <tr>
            <td width='60px'>{props.text}</td>
            <td>{props.value.toFixed(2)}</td>
          </tr>
        </div>
      )
    }
  else {
    return (
      <div>
        <tr>
          <td width='60px'>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </div>
    )
  }
  
}

// a proper place to define a component
const Statistics = (props) => {
  console.log(props)
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value ={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text="positive" value ={100 * props.good / (props.good + props.neutral + props.bad)} />
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <Header title='give feedback' />
    <Button handleClick={() => setGood(good + 1)} text="good" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
    <Button handleClick={() => setBad(bad + 1)} text="bad"/>

    <Header title='statistcs'/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App