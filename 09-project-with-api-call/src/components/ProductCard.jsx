import { useContext } from "react";
import React from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  let { setCartItems, incrementQuantity, decrementQuantity } =
    useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product successfully added !!!!....");
  };
  return (
    <div className="w-80 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-48 object-contain"
        />
      </div>

      {/* Category */}
      <p className="mt-4 text-sm capitalize text-gray-500">
        {product.category}
      </p>

      {/* Title */}
      <h2 className="mt-2 line-clamp-2 text-lg font-semibold text-gray-900">
        {product.title}
      </h2>

      {/* Description */}
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
        {product.description}
      </p>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-yellow-500">⭐ {product.rating.rate}</span>

        <span className="text-sm text-gray-500">
          ({product.rating.count} reviews)
        </span>
      </div>

      {/* Price */}
      <h3 className="mt-4 text-2xl font-bold text-gray-900">
        ${product.price}
      </h3>

      {/* Add to Cart */}

      {isInCart && isInCart.quantity > 0 ? (
        <button className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white">
          <span
            onClick={() => decrementQuantity(product.id)  }
            className="px-3 py-2 text-lg hover:bg-gray-100"
          >
            −
          </span>

          <span className="border-x border-gray-300 px-4 py-2 font-semibold">
            {isInCart.quantity } 
          </span>

          <span
            onClick={() => incrementQuantity(product.id)}
            className="px-3 py-2 text-lg hover:bg-gray-100"
          >
            +
          </span>
        </button>
      ) : (
        <button
          onClick={addToCart}
          className="mt-4 w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
