export default function Item({name, quantity, category}) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm">

        name: {name}
        quantity: {quantity}
        category: {category}

    </li>
  );
}