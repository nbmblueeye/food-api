import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <>
        <NavBar/>
        <div className="main-content">
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout