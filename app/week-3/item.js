export default function Item({name, quantity, category}) {
  return (
    <div>
      <ul>
        <p>name = {name}</p>
        <p>quantity = {quantity}</p>
        <p>category = {category}</p>
      </ul>
    </div>
  );
}