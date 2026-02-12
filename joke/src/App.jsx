import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TelaPiada from './pages/TelaPiada.jsx'
import Home from './pages/Home.jsx'
import Categories from './pages/Categories.jsx'
import TelaPiadaNSFW from './pages/TelaPiadaNSFW.jsx'
import { ROUTES } from './constants/Routes.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.RANDOM} element={<TelaPiada />} />
        <Route path={ROUTES.NSFW} element={<TelaPiadaNSFW />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  )
}

export default App;