"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <main className="bg-[#07553B] min-h-screen p-4">
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8 justify-center items-start">
        {/* new item form fixed width */}
        <div className="max-w-md w-full">
          <NewItem onAddItem={handleAddItem} />
        </div>

        {/* shopping list container fixed width, directly beside */}
        <div className="w-113 bg-[#053925] rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-bold text-center text-white mb-4 underline">
            Shopping List
          </h2>
          <ItemList items={items} />
        </div>
      </div>
    </main>
  );
}
