import React from 'react'
import Comp3 from './Comp3';
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Comp2 = () => {

    let cd = useContext(MyStore);
    
     console.log("i am form 2 " ,cd);
     
  return (
    <div>
        <Comp3 />
      
    </div>
  )
}

export default Comp2
