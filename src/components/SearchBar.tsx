import { useState } from 'react';
import { UseFoodContext } from '../contexts/FoodContext';
import { UseNavContext } from '../contexts/NavContext';


const SearchBar = () => {

    const { navState } = UseNavContext();
    const { searchFoods, randomFoods, getFoods } = UseFoodContext();
    const [searchInput, setSearchInput] = useState('');

    const submitSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchFoods(import.meta.env.VITE_API_All_MEALS_URL, searchInput);
        setSearchInput('');
    }

  return (
    <div className={`main-nav-menu-wrapper ${navState ? "show-mobile-menu":"hide-mobile-menu"}`}>
        <div className="container">
            <ul className={`main-nav-menu`}>
                <li className="nav-menu-item search">
                    <form onSubmit={(e) => submitSearch(e)}>
                        <input type="text" id='seachFood' name='seachFood' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                        <button type='submit'>Search</button>
                    </form>
                </li>
                <li className="nav-menu-item">
                    <button type="button" onClick={(e) => randomFoods( import.meta.env.VITE_API_RANDOM_MEAL_URL, e )}>Random Meal</button>
                </li>
                <li className="nav-menu-item">
                    <button type="button" onClick={() => getFoods( import.meta.env.VITE_API_All_MEALS_URL )}>Show All Meals</button>
                </li>
            </ul> 
        </div>
    </div> 
  )
}

export default SearchBar