import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosBasket } from "react-icons/io";
import { UseNavContext } from '../contexts/NavContext';
import { UseFoodContext } from '../contexts/FoodContext';
import Favourites from './Favourites';
import SearchBar from './SearchBar';

const NavBar = () => {

   const { navState, setNavState, favoriteNavState, setFavouriteNavstate } = UseNavContext();
   const {  favourites } = UseFoodContext();

   const toggleMobileMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setNavState(!navState);
   }

   const toggleFavouriteMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setFavouriteNavstate(!favoriteNavState);
    }

  return (
    <div className="main-nav">
       <div className="container">
            <div className="main-nav-wrapper">
                <Link to="#">
                    <p className='main-nav-logo'>Food API</p>
                </Link>
                <div className="main-nav-component">
                    <button className="main-nav-fovor" onClick={(e) => toggleFavouriteMenu(e)}>
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


