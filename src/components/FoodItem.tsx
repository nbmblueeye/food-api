import { FaThumbsUp } from "react-icons/fa";
import { UseFoodContext } from '../contexts/FoodContext';
import { Link } from "react-router-dom";
import { Food } from "../types/FoodType";


type Props = {
    food: Food,
}

const FoodItem = ({food}:Props) => {

  const {  favourites, addToFavourites, getFood } = UseFoodContext();
 
  return (
    <div className="food-item">
        <div className="food-item-img-box" onClick={() => getFood(food.id, false, false)}>
            <img src={food.thumbnail} alt={food.name} loading="lazy"/>
        </div>
        {
            food.category && 
            <p className="food-item-category">
                <span>Category: </span><Link to={`/category/${food.category}`}>{food.category}</Link>
            </p>
        }
        <div className="food-item-info-box">
            <h1 className="name">{food.name}</h1>
            <button className={`like-btn ${favourites.find(favor => favor.id == food.id) ? "liked":""}`} onClick={() => addToFavourites(food.id)}>
                <FaThumbsUp />
            </button>
        </div>
    </div>
  )
}

export default FoodItem