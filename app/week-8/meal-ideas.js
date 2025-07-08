'use client';
import { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  }

  async function loadMealIdeas() {
    const cleaned = ingredient.trim().toLowerCase();
    const ideas = await fetchMealIdeas(cleaned);
    setMeals(ideas);
  }

  return (
    <div className="w-full max-w-md p-4 bg-[#053925] rounded-lg shadow-md text-white">
      <h2 className="text-xl font-bold mb-4 underline">Meal Ideas for "{ingredient}"</h2>
      {meals.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-4">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 object-cover rounded"
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
