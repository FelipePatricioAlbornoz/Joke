import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TelaPiada from './pages/TelaPiada.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TelaPiada />} />
        <Route path='/telaPiada' element={<TelaPiada />} />
        <Route path='/filtro' element={<TelaPiada />} />
        <Route path='/categories' element={<TelaPiada />} />
      </Routes>
    </Router>
  )
}

export default App;