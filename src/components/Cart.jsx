import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {
  let {cartItems} =  useContext(MyShop)
  const subtotal = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <h2 className="text-xl text-gray-500">
            Your cart is empty 🛒
          </h2>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Products */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-6"
              >
                {/* Product Image */}
                <div className="w-28 h-28 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-3"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <p className="text-sm text-gray-500 capitalize">
                    {product.category}
                  </p>

                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h2>

                  <p className="text-xl font-bold text-green-600 mt-2">
                    ${product.price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button className="w-9 h-9 rounded-md bg-gray-200 hover:bg-gray-300">
                    -
                  </button>

                  <span className="font-semibold">1</span>

                  <button className="w-9 h-9 rounded-md bg-gray-200 hover:bg-gray-300">
                    +
                  </button>
                </div>

                {/* Remove */}
                <button className="text-red-500 hover:text-red-700 font-medium">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              
              <h2 className="text-xl font-bold mb-6">
                Order Summary
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Shipping</span>
                <span className="font-medium text-green-600">
                  Free
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-5"></div>

              {/* Total */}
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Checkout */}
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Secure checkout 🔒
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;