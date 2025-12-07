import React from 'react'
import { useState } from 'react';

const App = () => {

  const [task, setTask ] = useState([])

const [title, setTitle ] = useState("")
const [details, setDetails ] = useState("")
const submithandler = (e) =>{
  e.preventDefault()

  const copyTask = [...task];
  console.log(task)
  copyTask.push({title , details})
  setTask(copyTask)
  
  

  setTitle("")
  setDetails("")
}

const deletenote =(idx) => {

  const copyTask = [...task];
  copyTask.splice (idx,1)
  setTask(copyTask)
}


  return (
    <div className='min-h-screen lg:flex bg-black text-white'>   {/* <— FIX */}

      {/* LEFT FORM SECTION */}
      <form onSubmit={submithandler} 
      className='flex p-10 lg:w-1/2 gap-4 flex-col items-start'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
         value={title}
         onChange={(e)=>{
           setTitle(e.target.value)
         }}
        


        />

        <textarea 
        placeholder='Write Details'
        className='px-5 w-full h-32 py-2 font-medium border-2 outline-none rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button 
        className='bg-white active:bg-black font-medium w-full outline-none text-black  py-2 px-5 rounded'>
          Add Notes
        </button>

      </form>

      {/* RIGHT SIDE DISPLAY */}
      <div className='lg:w-1/2 lg:border-l-2 p-10 bg-gray-900'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
         {task.map(function (elem,idx){
          return <div key={idx} className="h-52 w-40 bg-cover rounded-xl text-black p-4 bg-[url('https://i.pinimg.com/originals/89/c5/42/89c54274e553b01804fa1f2118c35fd1.jpg')]">
          <div>
          <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
          </div>
          <button onClick={()=>{
            deletenote(idx)
          }} className='w-full mt-...2  active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            
          </div>
          
         })}
        </div>
      </div>

    </div>
  )
}

export default App
