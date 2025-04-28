import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState(null); // Initialize as null
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "268c5f6ce93f4ba99425ca3834b030d4";

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${apiKey}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching food details:", error);
        setIsLoading(false); // Ensure loading is false even if there's an error
      }
    }
    fetchFood();
  }, [foodId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!food) {
    return <div>Food details could not be loaded.</div>;
  }

  return (
    <div>
      <h2>Food Details: {food.title || "N/A"}</h2>
      <img src={food.image || "placeholder.jpg"} alt={food.title || "Food Image"} />
      <strong>
        <p>Preparation time: {food.readyInMinutes || "N/A"} min</p>
        <p>Servings 👪: {food.servings || "N/A"}</p>
        <p>{food.vegetarian ? "🥦 Vegetarian" : "🍖 Non-Vegetarian"}</p>
        <p>{food.vegan ? "🐮 Vegan" : ""}</p>
      </strong>
      <strong>Instructions:</strong>
      {food.analyzedInstructions && food.analyzedInstructions.length > 0 ? (
        <ul>
          {food.analyzedInstructions[0].steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
        </ul>
      ) : (
        <p>No instructions available.</p>
      )}
    </div>
  );
}
