"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleItemSelect(item) {
    const rawName = item.name;

    // Remove emojis and non-letter characters (except spaces)
    const noEmoji = rawName.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');

    // Remove everything after a comma or dash (usually quantity info)
    const noExtras = noEmoji.split(/,|-/)[0];

    // Extract just the main noun/ingredient word
    const words = noExtras.trim().toLowerCase().split(" ");
    const coreIngredient = words.find(word => word.length > 2) || words[0]; // fallback if everything is short

    setSelectedItemName(coreIngredient);
  }


  return (
    <main className="bg-[#07553B] min-h-screen p-4">
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8 justify-center items-start">
        <div className="max-w-md w-full">
          <NewItem onAddItem={handleAddItem} />
        </div>

        <div className="w-113 bg-[#053925] rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-bold text-center text-white mb-4 underline">
            Shopping List
          </h2>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {selectedItemName && (
          <MealIdeas ingredient={selectedItemName} />
        )}
      </div>
    </main>
  );
}
