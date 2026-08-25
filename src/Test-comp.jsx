import React, { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import Comp4 from './components/Comp4'
import NestedComp from './components/NestedComp'

const Testcomp = () => {

    // const[data , setData] =useState("Hola I am Data");
  return (
    <div>
        <Comp1  >
            <NestedComp />
        </Comp1>
        
      
    </div>
  )
}

export default Testcomp
