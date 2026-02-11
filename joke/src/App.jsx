import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TelaPiada from './pages/TelaPiada.jsx'
import Home from './pages/Home.jsx'
import Categories from './pages/Categories.jsx'
import Filtro from './pages/Filtro.jsx'
import TelaPiadaNFSW from './pages/TelaPiadaNSFW'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TelaPiada />} />
        <Route path='/home' element={<Home />} />
        <Route path='/filtro' element={<Filtro />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/piadaNFSW' element={<TelaPiadaNFSW />} />
      </Routes>
    </Router>
  )
}

export default App;