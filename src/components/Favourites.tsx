import { UseFoodContext } from "../contexts/FoodContext";
import { UseNavContext } from "../contexts/NavContext";

const Favourites = () => {

    const {  favourites, getFood } = UseFoodContext();
    const { favoriteNavState } = UseNavContext();

    return (
        <div className={`main-nav-favoutites-wrapper ${favoriteNavState ? "open-main-nav-favoutites":"close-main-nav-favoutites"}`}>
            <div className="container">
                <h3>Your Favourites Food</h3>
                {
                    favourites.length > 0 ?
                    <ul className='main-nav-favoutites'>
                        {
                            favourites.map((favour) => {
                                return(
                                    <li className="nav-favoutites-item">
                                        <div className="favoutites-item-box" onClick={() => getFood(favour.id, true)}>
                                            <img src={favour.thumbnail} alt={favour.name} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul> 
                    :
                    <p className="message">No Favourite Food are selected!!!</p>  
                }   
            </div>
        </div>
    )
}

export default Favourites