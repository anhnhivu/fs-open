import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => {
  return (
  <h1>{props.title}</h1>
  )
}

const HasVotes = (props) => {
  //console.log('has how many votes', props)
  return (
  <p>has {props.votes} votes</p>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  
  let n = 7
  let value = Math.floor(Math.random() * n) 
  let mostVoted = 0
  const points = Array(n).fill(0)
  const [vote, setVote] = useState(points)
  

  for ( let i = 0; i < n; i++ ) {
    if (vote[i] > vote[mostVoted]) {
      mostVoted = i
    } 
  }

  const handleVoteClick = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <Header title="Anecdote of the day" />
      <p> {anecdotes[selected]} </p>
      <HasVotes votes={vote[selected]}/>
      <p>
        <Button handleClick={handleVoteClick} text="vote" />
        <Button handleClick={() => setSelected(value)} text="next anecdote" />
      </p>
      
      <Header title="Anecdote with most votes" />
      <p> {anecdotes[mostVoted]} </p>
      <HasVotes votes={vote[mostVoted]}/>
    </div>
  )
}

export default App
