import { useEffect, useRef } from "react";
import { UseFoodContext } from "../contexts/FoodContext";
import PaginationPost from "../components/PaginationPost";
import FoodModal from "../components/FoodModal";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";


const Categories = () => {

    const { category } = useParams();
    const { foods, getFoods ,loading, modal } = UseFoodContext();
    const foodListRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(category){
          getFoods(`${import.meta.env.VITE_API_BY_CATEGORY_MEAL_URL}${category}`);
          window.scrollTo({
            top:foodListRef.current?.scrollTop,
            behavior:"smooth"
          })
        }
    },[category]);

    let data:any = "";
    if(loading){
        data = <div className="loader-box"><div className="loader"></div></div>
    }else{
        if(foods.length > 0 ){
            data = <PaginationPost/>
        }else{
        data = <div className="foods-list">
            <p>No Food available</p>
        </div>
        }
    }

  return (
    <>
      <div className="content-section category container" ref={foodListRef}>
        <BreadCrumb cate={category} product=""/>
        <h1 className="product-title">{category}</h1>
        {
          data
        }

      </div>
      {modal && <FoodModal/>}
  </>
  )
}

export default Categories