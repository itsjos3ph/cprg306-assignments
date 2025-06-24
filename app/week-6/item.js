// styling like week 3 - yellow card with bold black text
export default function Item({ name, quantity, category }) {
  return (
    <li
      className="p-4 m-4 max-w-sm font-bold text-zinc-950 rounded-lg shadow"
      style={{ backgroundColor: '#CED46A' }}
    >
      <div className="text-2xl">name: {name}</div>
      <div>quantity: {quantity}</div>
      <div>category: {category}</div>
    </li>
  );
}
