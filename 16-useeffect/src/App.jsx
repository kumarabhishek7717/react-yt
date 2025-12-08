import React, { useEffect, useState } from 'react'

const App = () => {

  const[num , setNum] = useState(0)
  const [num1 , setNum1] = useState(0)

useEffect(function(){
  console.log('use effect is running ...')
},[num1])


  return (
    <div>
      <h1>{num}</h1>
      <h1>{num1}</h1>
      <button onClick={()=>{
         setNum(10)
         setNum1(num1+1)
      }}>click</button>
    </div>
  )
}

export default App
