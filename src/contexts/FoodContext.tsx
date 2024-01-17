import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Food, FoodData } from '../types/FoodType';


type FoodContextType = {
    foods:Food[],
    favourites:Food[],
    selectedFood:Food,
    selectedFoodData:FoodData,
    todayFoodData:FoodData,
    modal:boolean,
    setModal:(modal:boolean) => void,
    getFoods: (url:string) => Promise<void>,
    getFood: (id:string, isFavourites:boolean, isTodayFood:boolean) => void,
    addToFavourites:(id:string) => void,
    loading: boolean,
    loadingModal:boolean,
    searchFoods: (url:string, params:string) => Promise<void>,
    randomFoods: (url:string, e:React.MouseEvent<HTMLButtonElement>) => Promise<void>,
    getFoodByID:(url:string, params:string) => Promise<void>,
    getToDayFood:(url:string) => Promise<void>,
}

const CreateFoodContext = createContext({} as FoodContextType);

export const UseFoodContext = () => useContext(CreateFoodContext);

const FoodContext = ({children}:{children:React.ReactNode}) => {
    const [foods, setFoods] = useState<Food[]>([]);
    const [favourites, setFavourites] = useState<Food[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);

    const [selectedFood, setSelectedFood] = useState({} as Food);
    const [selectedFoodData, setSelectedFoodData] = useState({} as FoodData);
    const [todayFoodData, setTodayFoodData] = useState({} as FoodData);
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
                    }
                })
                if(meals.length > 0){
                    setFoods(meals);
                }
            }
            setTimeout(() => {
                setLoading(false);
            }, 500);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }

    const getFood = async(id:string, isFavourites:boolean, isTodayFood:boolean) => {
        if(isFavourites){
            const selectedFF = favourites.find(favourite => favourite.id === id);
            if(!selectedFF){
                return false;
            }else{
                setSelectedFood(selectedFF); 
            }
        }else if(isTodayFood){
            if(Object.keys(todayFoodData).length > 0){
                setSelectedFood(todayFoodData); 
            }else{
                return false
            }
        }else{
            const selectedF = foods.find(food => food.id === id);
            if(!selectedF){
                return false
            }else{
                setSelectedFood(selectedF);  
            }
        }
        setModal(true);
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

    const getToDayFood = async(url: string) => {
        setLoading(true);
        await axios.get(url)
        .then(response => {
            console.log(response.data);
            if(response.status = 200){
                if(response.data.meals.length > 0){
                let { 
                    idMeal:id,
                    strMeal:name,
                    strMealThumb:thumbnail,
                    strCategory:category,
                    strInstructions:instruction,
                    strSource,
                    strYoutube,
                    strArea,
                 } = response.data.meals[0];

                 setTodayFoodData({
                    id,
                    name,
                    thumbnail,
                    category,
                    instruction,
                    strSource,
                    strYoutube,
                    strArea,
                 })
                }
               setTimeout(() => {
                setLoading(false);
               }, 450);
            }
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }

    const getFoodByID = async(url:string, params:string) => {
        setLoadingModal(true);
        let newurl = url+`${params}`;
        await axios.get(newurl)
        .then(response => {
            if(response.status = 200){
                if(response.data.meals.length > 0){
                let { 
                    idMeal:id,
                    strMeal:name,
                    strMealThumb:thumbnail,
                    strCategory:category,
                    strInstructions:instruction,
                    strSource,
                    strYoutube,
                    strArea,
                 } = response.data.meals[0];

                 setSelectedFoodData({
                    id,
                    name,
                    thumbnail,
                    category,
                    instruction,
                    strSource,
                    strYoutube,
                    strArea,
                 })
                }
               setTimeout(() => {
                setLoadingModal(false);
               }, 250);
            }
        })
        .catch(error => {
            console.log(error);
            setLoadingModal(false);
        })
    }
    
  return (
    <CreateFoodContext.Provider value={{
        foods,
        favourites,
        selectedFood,
        selectedFoodData,
        todayFoodData,
        modal,
        setModal,
        getFoods,
        getFood,
        addToFavourites,
        loading,
        loadingModal,
        searchFoods,
        randomFoods,
        getFoodByID,
        getToDayFood,
    }}>
        {children}
    </CreateFoodContext.Provider>
  )
}

export default FoodContext