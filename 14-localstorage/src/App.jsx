import React from 'react'

const App = () => {
  const user = {
    username:'Abhishek',
    age:20,
    city:'bhopal'
  }
     localStorage.setItem('user', JSON.stringify (user))
  return (

    <div>
      App
    </div>
  )
}

export default App
