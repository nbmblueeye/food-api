import { useEffect } from 'react';
import Layout from '../components/Layout'
import { UseFoodContext } from '../contexts/FoodContext'
import FoodItem from '../components/FoodItem';
import FoodModal from '../components/FoodModal';

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
      data = <div className="foods-list">
        {
          foods.map(food => {
            return (
              <FoodItem food={food} key={food.id}/>
            )})
        }
      </div>
    }else{
      data = <div className="foods-list">
        <p>No Food available</p>
      </div>
    }
  }

  return (
    <Layout>
        <div className="content-section">
          {
            data
          }
        </div>
        {modal && <FoodModal/>}
    </Layout>
  )
}

export default Index