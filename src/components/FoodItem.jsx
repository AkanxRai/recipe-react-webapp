import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  function handleClick(id) {
    setFoodId(id)
  }
  return (
    <div className={styles.foodItem}>
      <img className={styles.imageContainer} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => handleClick(food.id)} className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
