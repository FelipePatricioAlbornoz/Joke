import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import TelaPiada from './pages/TelaPiada.jsx'


function App() {
  return (
  <Router>
    <Routes>
      <Route path= '/' element= {<TelaPiada/>}/>
      <Route path= '/telaPiada' element= {<Home/>}/>
      <Route path= '/filtro' element= {<Home/>}/>
      <Route path= '/categories' element= {<Home/>}/>
    </Routes>
  </Router>
  ) 
}

export default App;