import NavBar from './NavBar'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <NavBar/>
        <div className="container">
            {children}
        </div>
    </>
  )
}

export default Layout