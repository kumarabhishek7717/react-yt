import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
    <Card user= 'Abhishek '  age = {20} img ="https://images.unsplash.com/photo-1757710436034-f1d7372ec1be?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
    <Card user= 'Abhimanyu ' age = {21} img="https://images.unsplash.com/photo-1750841896972-7e78c4ba21d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user= 'Ansul' age={25} img="https://images.unsplash.com/photo-1762732793012-8bdab3af00b4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

    
       
     

    </div>
  )
}

export default App
