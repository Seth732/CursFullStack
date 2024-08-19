import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Anecdote = ({anecdote}) => {
  return (
    <p>{anecdote}</p>
  )
}

const VoteCounter = ({vote}) => {
  return (
    <p>has {vote} votes </p>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick} >{text}</button>
  )
}

const MaxAnecdote = ({vote, anecdotes}) => {
  let index = vote.indexOf(Math.max(...vote))
  return (
    <p>
      {anecdotes[index]}
    </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const anecdotes_length = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes_length).fill(0))


 

  const handleVotes = () => {
    const newVotes =[...vote]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes_length))
  }

  return (
    <div>
      <Header text={"Anecdote of the day"}/>
      <Anecdote anecdote={anecdotes[selected]} />
      <VoteCounter vote={vote[selected]} />
      <Button handleClick={handleVotes} text={"vote"}/>
      <Button handleClick = {handleRandom} text = "next anecdote" />
      <Header text={"Anecdote with most votes"}/>
      <MaxAnecdote vote = {vote} anecdotes={anecdotes} />
      <VoteCounter vote={Math.max(...vote)} />
    </div>
  )
}

export default App