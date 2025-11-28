import { useState } from 'react'

function App() {

  let  [count,setCount]= useState(0);
  function increaseNumber(){
    count++;
    setCount(count);
  }

  // function increaseNumber(){
  //   count++;
  //   console.log(count);
  //   document.querySelector('p').innerText = "Counter: " + count;   //dom manipulation
  // }

  return (
   
    <>
     <h1>Hello! This is my basic ReactJS Project</h1>
     <p>Counter: {count}</p>
     <button onClick={increaseNumber}>Increment</button>
    </>
  )
}

export default App
