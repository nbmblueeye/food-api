import { Link } from "react-router-dom"
import { UseFoodContext } from "../contexts/FoodContext";
import { RxCross2 } from "react-icons/rx";

const FoodModal = () => {

  const { selectedFood, setModal } = UseFoodContext();

  return (
    <div className="modal-container">
        <div className="modal-content-box">
            <img src={selectedFood.thumbnail} alt={ selectedFood.name } loading="lazy"/>
            <h1 className="modal-title">{ selectedFood.name }</h1>
            <p className="modal-content">
               {selectedFood.instruction}
            </p>
            <Link to={selectedFood.sourceUrl} className="modal-link">View source</Link>
        </div>
        <button className="modal-close-btn" onClick={() => setModal(false)}><RxCross2 /></button>
    </div>
  )
}

export default FoodModal