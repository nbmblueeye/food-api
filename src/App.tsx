import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './views/Index'
import Layout from './components/Layout'
import Categories from './views/Categories'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Index/>}/>
            <Route path="/category/:category" element={<Categories/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default App