'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // increment function that positively changes the quantity state variable
  function increment() {
    setQuantity(prev => (prev < 20 ? prev + 1 : prev));
  }
  // decrement function that negatively changes the quantity state variable
  function decrement() {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  }
  function reset() {
    setQuantity(1)
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4 text-black">Set Quantity</h2>

        <div className="text-black text-2xl font-bold mb-4">{quantity}</div>

        <div className="flex justify-center space-x-4">
          {/* Button to lower the value of the quantity variable - going under 1 not allowed*/}
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className={`w-10 px-4 py-2 text-white rounded ${
              quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            -
          </button>
          
          {/* Button to raise the value of the quantity variable - going above 20 not allowed */}
          <button
            onClick={increment}
            disabled={quantity === 20}
            className={`w-10 px-4 py-2 text-white rounded ${
              quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            +
          </button>

          {/* Button to reset the value of the quanitity variable - going back to 1 */}
          <button
            onClick={reset}
            disabled={quantity === 1}
            className={`w-10 px-4 py-2 text-white rounded ${
              quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            ↻
          </button>
        </div>
      </div>
  );
}
