import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {


  function handleClick(){
    alert('Button Click');
  }

  const handleClick2 = () =>{
    alert('Button Click 2');
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concept 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter> 


      {/* <button onclick="handleClick()">Click Me</button> */}
      <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('Third Click')}} >Third</button>
      {/* Vajailla */}
      <button onClick={() => addToFive(3)}>Four</button>
      </div>
      
    </>
  )
}

export default App
