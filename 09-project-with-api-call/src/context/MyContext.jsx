import { createContext } from "react";
import React, {  useState } from "react";

export const MyStore = createContext();

export const ContextProvider = (({children}) => {


    
      // console.log(productData);
      const [isCartOpen, setIsCartOpen] = useState(false);
      const [cartItems , setCartItems] =useState([]);
    //   console.log(cartItems)

    const incrementQuantity = (id) => {
       
        setCartItems((prev) => {
            return prev.map((val) => {
            return val.id === id ? {...val , quantity: val.quantity + 1} : val;
            })
        })

      
    }

    const decrementQuantity = (id) => {
       
        setCartItems((prev) => {
            return prev.map((val) => {
            return val.id === id ? {...val , quantity: val.quantity - 1} : val;
            })
            .filter((val) => val.quantity > 0);
        })

      
    }


return <MyStore.Provider value={{isCartOpen , setIsCartOpen , cartItems , setCartItems,incrementQuantity , decrementQuantity} }>
    {children }
</MyStore.Provider>
})