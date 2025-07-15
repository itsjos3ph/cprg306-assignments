"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((q) => (q < 20 ? q + 1 : q));
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : q));
  const reset = () => setQuantity(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-[#CED46A] rounded-lg shadow-md space-y-6 text-zinc-950"
    >
      <h2 className="text-2xl font-bold text-center">Add New Item</h2>

      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded bg-white"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Quantity</label>
        <div className="text-xl font-bold text-center mb-2">{quantity}</div>
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`w-10 px-2 py-1 text-white rounded ${
              quantity === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`w-10 px-2 py-1 text-white rounded ${
              quantity === 20
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            +
          </button>
          <button
            type="button"
            onClick={reset}
            disabled={quantity === 1}
            className={`w-10 px-2 py-1 text-white rounded ${
              quantity === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            ↻
          </button>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded bg-white"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 text-black py-2 rounded hover:bg-green-800 transition"
      >
        Submit
      </button>
    </form>
  );
}
