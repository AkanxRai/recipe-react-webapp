import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerComponent from "./components/InnerComponent";
import FoodDetail from "./components/FoodDetail";
export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <div>
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerComponent>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerComponent>
        <InnerComponent>
          <FoodDetail foodId={foodId}/>
        </InnerComponent>

      </Container>
    </div>
  );
}
