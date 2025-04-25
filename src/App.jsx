import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
export default function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <FoodList foodData={foodData} />
   
      </Container>
    </div>
  );
}
