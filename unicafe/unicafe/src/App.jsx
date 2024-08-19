import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statics = ({good, neutral, bad, all}) => {

    return all > 0 ? (
      <table>
        <tbody>
          <Data text ="good" counter = {good} /> 
          <Data text = "Neutral" counter = {neutral} /> 
          <Data text ="Bad" counter = {bad} /> 
          <Data text ="All" counter = {all} /> 
          <Data text = "Average" counter = {(good - bad) / all} /> 
          <Data text = "Positive" counter = {`${good / all * 100} %`} /> 
        </tbody>
      </table>
    ) : 

     <p>No feedback given</p>
  
}

const Data = ({text, counter}) => {
  return (  
    <tr><td>{text}</td> <td>{counter}</td></tr>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
  }

  return (
    <div>
      <Header title = {"give feedback"} />
      <Button handleClick = {handleGoodClick} text = {"Good"}/>
      <Button handleClick = {handleNeutralClick} text = {"Neutral"}/>
      <Button handleClick = {handleBadClick} text = {"Bad"}/>
      <Header title = {"statics"} />
      <Statics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App