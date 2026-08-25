import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite';

const ProductCard = ({ product }) => {
  let {setCartItems} = useContext(MyShop);
  
  return (
    <div className=" w-70 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="flex h-64 items-center justify-center rounded-xl bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">

        {/* Category */}
        <p className="text-sm capitalize text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mt-1 line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium text-gray-700">
            {product.rating.rate}
          </span>
          <span className="text-sm text-gray-400">
            ({product.rating.count})
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between">

          <p className="text-xl font-bold text-gray-900">
            ${product.price}
          </p>

          <button onClick={() => { setCartItems(prev=> [...prev , product])}} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;