import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { useContext } from 'react'
import { MyStore } from './context/MyConsumer'

const App = () => {
  let {count ,setCount} = useContext(MyStore);
  // console.log(data)

  const [toggle , setToggle] =useState(false);

  useEffect(() => {
    console.log("I am rendering")
  },[toggle])

  console.log("App Rendering.......")
  return (
    <div className='flex flex-col gap-4'>
      <h1>Hello I am app - {count}</h1>
      <button onClick={() => {setCount(count + 1)}}>Click Me</button>

      <button onClick={() => {setToggle((prev) => !prev)}}>Click to change</button>

      {/* <Home />
      <About /> */}
      {/* <Contact /> */}


      {
        toggle ? <Contact /> : <About />
      }



    </div>
  )
}

export default App
