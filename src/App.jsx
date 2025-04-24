import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css"
export default function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Nav />
      <Search setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}



