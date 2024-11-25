import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Otp } from './Componenets/Otp'

function App() {

  return (
    <div className='flex  flex-col text-center h-screen w-screen bg-blue-900'>
      {/* <div className='pt-20 pb-20' ><h2 className='text-3xl text-white font-bold'><span className='text-blue'>Webinar</span>.gg</h2> </div>
      <div className='pb-12'> <h3 className='text-3xl text-white font-bold'>Verify your Age</h3></div>
      <div className=' pb-8'>
        <p className='text-gray-900 font-semibold'>Please confirm your Birth year. This data will not be stored</p>
        <input className='pb-4 w-72 rounded bg-blue-500 pt-1 px-2' type="text" placeholder='Enter your birthdate'/>
      </div>
      <div>
        <button className='w-72 rounded bg-blue-500 h-8 font-semibold text-white'>Continue</button>
      </div> */}
      <Otp number={10}/>
    </div>
  )
}

export default App
