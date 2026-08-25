import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Comp4 = () => {
 let cd = useContext(MyStore);

 console.log(cd);
  return (
    <div>
      
    </div>
  )
}

export default Comp4
