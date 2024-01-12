import React, { createContext, useContext, useState } from 'react'

type NavContextType = {
  navState: boolean,
  setNavState: (navState: boolean) => void
  favoriteNavState: boolean,
  setFavouriteNavstate: (navState: boolean) => void
}

const CreateNavContext = createContext({} as NavContextType);

export const UseNavContext = () => useContext(CreateNavContext);

const NavContext = ({children}:{children:React.ReactNode}) => {

  const [navState, setNavState] = useState<boolean>(false);
  const [favoriteNavState, setFavouriteNavstate] = useState<boolean>(false);

  const data = {
    navState,
    setNavState,
    favoriteNavState,
    setFavouriteNavstate
  }

  return (
    <CreateNavContext.Provider value={data}>
        {children}
    </CreateNavContext.Provider>
  )
}

export default NavContext