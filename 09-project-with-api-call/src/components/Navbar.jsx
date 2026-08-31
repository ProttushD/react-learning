import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'



const NavBar = () => {

    let {setIsCartOpen} = useContext(MyStore);
    


    return(
        <div className=' flex p-4 rounded bg-black text-white justify-between text-center'>
            <div>Logo</div>
            <div className='flex gap-10   '>
                <p onClick={() => {setIsCartOpen(false)}} className='hover:cursor-pointer hover:text-blue-600 transition-all ease-in-out'>Home</p>
                <p onClick={() => {setIsCartOpen(true)}} className='hover:cursor-pointer hover:text-blue-600 transition-all ease-in-out'>Cart</p>
            </div>
            <button>
                Login
            </button>
        </div>
    )
}

export default NavBar;