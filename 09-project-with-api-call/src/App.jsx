import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { isCartOpen, setCartItems, cartItems } = useContext(MyStore);

  const [productData, setProductData] = useState([]);
  const getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      //  console.log(res);
      setProductData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  // getProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4">
      <NavBar />
      {/* <ProductCard /> */}

      {isCartOpen ? (
        <div className="grid grid-cols-4 gap-4 ">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">

          {productData.map((elem) => {


            let isInCart = cartItems.find((val) => val.id === elem.id);
            // console.log(isInCart);

            return (
              <ProductCard
                key={elem.id}
                product={elem}
                setCartItems={setCartItems}
                isInCart ={isInCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
