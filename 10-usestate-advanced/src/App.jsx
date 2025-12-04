import React, { useState } from 'react'

const App = () => {
const [num , setNum] = useState([10,20,30])
const btnclicked = () =>{
    const newNum = [...num]
    newNum.push(90)
    setNum(newNum)
    
    
  }

  return (
    <div>
    <h1>{num} </h1>
      <button onClick={btnclicked}>Click</button>
    </div>
  )
}

export default App
