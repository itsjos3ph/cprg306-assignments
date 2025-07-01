"use client";

export default function Item({ name, quantity, category }) {
  return (
    <li
      className="p-4 m-4 max-w-sm font-bold text-zinc-950 rounded-lg shadow"
      style={{ backgroundColor: "#CED46A" }}
    >
      <div className="text-xl capitalize">Name: {name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}
