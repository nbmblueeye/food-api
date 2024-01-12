import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

type Food = {
    id: string,
    name: string,
    thumbnail: string,
    category: string,
    instruction: string,
    sourceUrl:string,
}

type FoodContextType = {
    foods:Food[],
    favourites:Food[],
    selectedFood:Food,
    modal:boolean,
    setModal:(modal:boolean) => void,
    getFoods: (url:string) => Promise<void>,
    getFood: (id:string, isFavourites:boolean) => void,
    addToFavourites:(id:string) => void,
    loading: boolean,
    searchFoods: (url:string, params:string) => Promise<void>,
    randomFoods: (url:string, e:React.MouseEvent<HTMLButtonElement>) => Promise<void>,
}

const CreateFoodContext = createContext({} as FoodContextType);

export const UseFoodContext = () => useContext(CreateFoodContext);

const FoodContext = ({children}:{children:React.ReactNode}) => {
    const [foods, setFoods] = useState<Food[]>([]);
    const [favourites, setFavourites] = useState<Food[]>([]);
    const [loading, setLoading] = useState(false);

    const [selectedFood, setSelectedFood] = useState({} as Food);
    const [modal, setModal] = useState(false); 

    const getFoods = async(url:string) => {
        setLoading(true);
        await axios.get(url)
        .then(response => {
            if(response.status = 200){
                let meals = (response.data.meals).map((item:any) =>{
                    return {
                        id: item.idMeal,
                        name: item.strMeal,
                        thumbnail: item.strMealThumb,
                        category: item.strCategory,
                        instruction: item.strInstructions,
                        sourceUrl:item.strSource
                    }
                })
                if(meals.length > 0){
                    setFoods(meals);
                }
            }
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }

    const getFood = async(id:string, isFavourites:boolean) => {
        const selectedF = foods.find(food => food.id === id);
        if(!selectedF){
            return false
        }else{
          if(!isFavourites){
            setSelectedFood(selectedF);  
          }else{
            const selectedFF = favourites.find(favourite => favourite.id === id);
            if(!selectedFF){
                return false;
            }else{
                setSelectedFood(selectedFF); 
            }
          }
         
          setModal(true);
         
        }
    }

    const addToFavourites = async(id:string) => {
        const isFoodExisted = foods.find(food => food.id === id);
        if(isFoodExisted){
            const isFavouriteExisted = favourites.find(favourite => favourite.id === id);
            if(isFavouriteExisted){
                setFavourites(favourites.filter(food => food.id !== id));
                toast.success("food is removed from favorites");
            }else{
                setFavourites([...favourites, isFoodExisted]);
                toast.success("food is added to favorites");
            }
        }else{
            toast.error("food is not found");
            return false;
        }
    }

    const searchFoods = async(url: string, params:string) => {
        let searchUrl = params ? url+`${params}` : url;
        await getFoods(searchUrl);
    }

    const randomFoods = async(url: string, e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await getFoods(url);
    }

  return (
    <CreateFoodContext.Provider value={{
        foods,
        favourites,
        selectedFood,
        modal,
        setModal,
        getFoods,
        getFood,
        addToFavourites,
        loading,
        searchFoods,
        randomFoods,
    }}>
        {children}
    </CreateFoodContext.Provider>
  )
}

export default FoodContext