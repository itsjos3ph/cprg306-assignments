"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let displayItems;

  if (sortBy === "grouped") {
    displayItems = items.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});
  } else {
    displayItems = [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  return (
    <div>
      <div className="flex gap-4 mb-6 pl-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-2 text-xs rounded font-semibold ${
            sortBy === "name"
              ? "bg-[#CED46A] text-zinc-950"
              : "bg-white text-zinc-950"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-2 text-xs rounded font-semibold ${
            sortBy === "category"
              ? "bg-[#CED46A] text-zinc-950"
              : "bg-white text-zinc-950"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`px-3 py-2 text-xs rounded font-semibold ${
            sortBy === "grouped"
              ? "bg-[#CED46A] text-zinc-950"
              : "bg-white text-zinc-950"
          }`}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "grouped" ? (
        Object.entries(displayItems)
          .sort()
          .map(([category, items]) => (
            <div key={category} className="mb-6">
              <h2 className="text-xl font-semibold capitalize mb-2 text-white">
                {category}
              </h2>
              <ul>
                {items
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
              </ul>
            </div>
          ))
      ) : (
        <ul>
          {displayItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
