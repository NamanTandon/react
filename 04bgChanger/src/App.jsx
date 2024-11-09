import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState('olive')
  // function changeColour(colour){
  //       setColour(colour)
  // }
  return (
   <div className='w-full h-screen duration-200'style={{backgroundColor: colour}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 
              shadow-lg bg-white px-3 py-2 rounded-3xl'>
                <button onClick={() => setColour('red')}  className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
                style={{backgroundColor:'red'}}>Red</button>
                <button onClick={() => setColour('blue')}className='outline-none px-4 py-1 rounded-full shadow-lg 
                text-black' style={{backgroundColor:'blue'}}>Blue</button>
                
                
                </div>
   </div>
   </div>
  )
}

export default App
