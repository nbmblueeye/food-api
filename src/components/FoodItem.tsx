import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { UseFoodContext } from '../contexts/FoodContext';

type Food = {
    id: string,
    name: string,
    thumbnail: string,
    category: string,
    instruction: string,
    sourceUrl:string,
}

type Props = {
    food: Food,
}

const FoodItem = ({food}:Props) => {

  const {  favourites, addToFavourites, getFood } = UseFoodContext();

  return (
    <div className="food-item" key={food.id}>
        <div className="food-item-img-box" onClick={() => getFood(food.id, false)}>
            <img src={food.thumbnail} alt={food.name} loading="lazy"/>
        </div>
        <p className="food-item-category"><span>Category: </span>{food.category}</p>
        <div className="food-item-info-box">
            <h1 className="name">{food.name}</h1>
            <button className={`like-btn ${favourites.find(favor => favor.id == food.id) ? "liked":""}`} onClick={() => addToFavourites(food.id)}>
                {
                    favourites.find(favor => favor.id == food.id) ?
                    <FaThumbsDown />
                    :
                    <FaThumbsUp />
                }
            </button>
        </div>
    </div>
  )
}

export default FoodItem