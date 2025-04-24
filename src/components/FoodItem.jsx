import styles from "./foodItem.module.css"
export default function FoodItem({ food }) {
  return (
    <div className={styles.foodItem}>
      <img className={styles.imageContainer} src={food.image} alt="" />
      <h1>{food.title}</h1>
      <button>View Reciepe</button>      
    </div>
  );
}
