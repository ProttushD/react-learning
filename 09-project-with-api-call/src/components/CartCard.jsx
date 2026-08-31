import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="flex w-full items-center gap-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

      {/* Product Image */}
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-24 w-24 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">

        {/* Category */}
        <p className="mb-1 text-sm capitalize text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Price */}
        <p className="mt-2 text-lg font-bold text-gray-900">
          ${product.price}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex shrink-0 items-center gap-3">

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg transition hover:bg-gray-100"
        >
          -
        </button>

        <span className="w-6 text-center font-medium">
          {product.quantity}
        </span>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg transition hover:bg-gray-100"
        >
          +
        </button>

      </div>

      {/* Subtotal */}
      <div className="w-28 shrink-0 text-right">

        <p className="text-sm text-gray-500">
          Subtotal
        </p>

        <p className="mt-1 text-lg font-bold text-gray-900">
          ${product.price}
        </p>

      </div>

      {/* Remove */}
      <button
        className="shrink-0 text-sm font-medium text-red-500 transition hover:text-red-700"
      >
        Remove
      </button>

    </div>
  );
};

export default CartCard;