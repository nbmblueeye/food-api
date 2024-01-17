import { UseFoodContext } from "../contexts/FoodContext";
import { RxCross2 } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineCropOriginal } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { useEffect } from "react";

const FoodModal = () => {

  const { selectedFood, setModal, getFoodByID, selectedFoodData,loadingModal } = UseFoodContext();

  useEffect(() => {
    if(selectedFood){
      getFoodByID(`${import.meta.env.VITE_API_BY_ID_MEAL_URL}`, selectedFood.id);
    }
  },[selectedFood]);

  let data:any = "";
  if(loadingModal){
    data = <div className="loader-box"><div className="loader"></div></div>
  }else{
    data = (
      <>
        <div className="modal-content-box">
            <img src={selectedFoodData.thumbnail} alt={ selectedFoodData.name } loading="lazy"/>
            <h1 className="modal-title">{ selectedFoodData.name }</h1>
            <div className="metabox">
              <p><strong><BiCategory size={24}/> </strong>{selectedFoodData.category}</p>
              <p><strong><MdOutlineCropOriginal size={24}/></strong>{selectedFoodData.strArea}</p>
            </div>
            <p className="modal-content">
               {selectedFoodData.instruction}
            </p>
            <div className="modal-footer">
              <a href={selectedFoodData.strSource} className="modal-link source" target="_blank">View source</a>  
              <a href={selectedFoodData.strYoutube} className="modal-link youtube" target="_blank"><FaYoutube size={24}/></a>
            </div>
        </div>
        <button className="modal-close-btn" onClick={() => setModal(false)}><RxCross2 /></button>
      </>
    )
  }

  return (
    <div className="modal-container">
        {data}
    </div>
  )
}

export default FoodModal