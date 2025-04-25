import styles from "./foodlist.module.css"
import FoodItem from "./FoodItem";

export default function FoodList({foodData, setFoodId}) {
  return (
    <div className={styles.foodlist}>

      {foodData.map( (food) => (
        
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
