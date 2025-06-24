// week 6 page with same bg colour as week 3
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-[#07553B] min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 ml-26 underline text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
}
