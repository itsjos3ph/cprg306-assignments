"use client";

export default function Item({ name, quantity, category, onSelect }) {
  function handleClick() {
    if (onSelect) onSelect({ name, quantity, category });
  }

  return (
    <li
      onClick={handleClick}
      className="p-4 m-4 max-w-sm font-bold text-zinc-950 rounded-lg shadow cursor-pointer hover:scale-[1.02] transition-transform"
      style={{ backgroundColor: "#CED46A" }}
    >
      <div className="text-xl capitalize">Name: {name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}
