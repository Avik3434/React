import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15) 

  // let counter = 5;
  function addValue(){
    // counter = counter + 1 // constant variable
    if (counter < 20)
      setCounter(counter + 1) // changes the value of counter throught out the entire web page
  }

  function removeValue(){
    if(counter > 0){
      setCounter(counter - 1)
    }

  } // understood about useState and its functionality where to use, how to use and the power of it


  return (
    <div>
      <h1>A small counter Project in react</h1>
      <h2>Counter value: <span>{counter}</span></h2>

      <button onClick={addValue} className="add-value-btn">Add value {counter}</button>
      <br />
      <button onClick={removeValue} className="remove-value-btn">Decrease value {counter}</button>

      <p>Current value {counter}</p>
    </div>
  )
}

export default App
