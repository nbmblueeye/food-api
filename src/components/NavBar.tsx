import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosBasket } from "react-icons/io";
import { UseNavContext } from '../contexts/NavContext';
import { UseFoodContext } from '../contexts/FoodContext';
import Favourites from './Favourites';
import SearchBar from './SearchBar';

const NavBar = () => {

   const { navState, toggleMobileMenu, favoriteNavState, toggleFavouriteMenu } = UseNavContext();
   const { favourites } = UseFoodContext();

  return (
    <div className="main-nav">
       <div className="container">
            <div className="main-nav-wrapper">
                <Link to="/" className='main-nav-logo'>
                    Food API
                </Link>
                <div className="main-nav-component">
                    <button className={`main-nav-fovor ${favoriteNavState ? "active-favorite":""}`} onClick={(e) => toggleFavouriteMenu(e)}>
                        <IoIosBasket /><span>{`(${favourites.length})`}</span>
                    </button>
                    <button className="main-nav-toggler" onClick={(e) => toggleMobileMenu(e)}>
                        {
                            navState ? <FaXmark />:<FaBars />
                        }
                    </button>
                </div>
                <SearchBar/>
                <Favourites/>
            </div> 
       </div> 
    </div>
    )
}

export default NavBar


