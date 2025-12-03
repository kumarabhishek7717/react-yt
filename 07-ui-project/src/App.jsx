import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
   const users =[
    {
      img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img :'https://media.istockphoto.com/id/1490765023/photo/financial-advisor-talking-to-a-couple-at-their-house.jpg?s=2048x2048&w=is&k=20&c=nqPj4mRQPVFmYBIysBNz_qnon1ipHaZvYFrSzHTXaBs=' ,
      intro:'',
      color:'lightblue',
      tag:'Underserved'
    },
    {
      img : 'https://media.istockphoto.com/id/1773071954/photo/businesswoman-working-on-laptop-at-hotel-cafe.jpg?s=2048x2048&w=is&k=20&c=S_ez3QQMfPWyI5TGruoUR-we9IE9g_F51n6E-nI0JK4=',
      intro:'',
      color:'lightseagreen',
      tag:'Underbanked'
    },
    {
      img :'https://images.unsplash.com/photo-1522206038088-8698bcefa6a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      color:'royalblue',
      tag : 'Average'

    }
   ]

  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
