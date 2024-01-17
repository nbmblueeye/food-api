import React, { createContext, useContext, useState } from 'react'

type NavContextType = {
  navState: boolean,
  toggleMobileMenu: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  favoriteNavState: boolean,
  toggleFavouriteMenu: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CreateNavContext = createContext({} as NavContextType);

export const UseNavContext = () => useContext(CreateNavContext);

const NavContext = ({children}:{children:React.ReactNode}) => {

  const [navState, setNavState] = useState<boolean>(false);
  const [favoriteNavState, setFavouriteNavstate] = useState<boolean>(false);

  const toggleMobileMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setNavState(!navState);
    if(favoriteNavState){
      setFavouriteNavstate(!favoriteNavState);
    }
}

const toggleFavouriteMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setFavouriteNavstate(!favoriteNavState);
    if(navState){
      setNavState(!navState);
    }
}

  const data = {
    navState,
    toggleMobileMenu,
    favoriteNavState,
    toggleFavouriteMenu
  }

  return (
    <CreateNavContext.Provider value={data}>
        {children}
    </CreateNavContext.Provider>
  )
}

export default NavContext