import { useEffect } from 'react';
import { UseFoodContext } from '../contexts/FoodContext'
import FoodModal from '../components/FoodModal';
import PaginationPost from '../components/PaginationPost';
import HeroSection from '../components/HeroSection';

const Index = () => {

  const { foods, getFoods, loading, modal } = UseFoodContext();

  useEffect(() => {
    getFoods(`${import.meta.env.VITE_API_All_MEALS_URL}`);
  },[]);

  let data:any = "";
  if(loading){
    data = <div className="loader-box"><div className="loader"></div></div>
  }else{
    if(foods.length > 0 ){
      data = 
      <>
        <PaginationPost/>
      </>
     
    }else{
      data = <div className="foods-list">
        <p>No Food available</p>
      </div>
    }
  }

  return (
    <>
      <HeroSection/>
      <div className="content-section container">
        {
          data
        }
      </div>
      {modal && <FoodModal/>}
    </>
  )
}

export default Index