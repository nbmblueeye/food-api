import { useEffect } from "react";
import { UseFoodContext } from "../contexts/FoodContext";
import FoodModal from "./FoodModal";


const HeroSection = () => {

    const { todayFoodData, getToDayFood, loading, getFood, modal } = UseFoodContext();

    useEffect(() => { 
        getToDayFood(`${import.meta.env.VITE_API_RANDOM_MEAL_URL}`);   
    },[]);

    let data:any = "";
    if(loading){
      data = <div className="loader-box"><div className="loader"></div></div>
    }else{
      if(Object.keys(todayFoodData).length > 0 ){
        data = 
        <div className="hero-section">
            <div className="hero-section-information">
                <h1 className="title">{todayFoodData.name}</h1>
                <p className="text">This is Menu of the Day, let's find out togather!!!</p>
                <h2 className="sub-title">50% Off for Today</h2>
                <button type="button" onClick={() => getFood(todayFoodData.id, false, true)}>View Menu</button>
            </div>
            <div className="hero-section-image">
                <img src={todayFoodData.thumbnail} alt={todayFoodData.name} />
            </div>
        </div>
      }else{
        data = <div className="foods-list">
          <p>No Food available</p>
        </div>
      }
    }

  return (
    <div className='hero-section-wrapper'>
        <div className="container">
            {data}
            {modal && <FoodModal/>}
        </div>
    </div>
  )
}

export default HeroSection