import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home.js'
import CriarConta from './components/pages/CriarConta.js'
import Sobre from './components/pages/Sobre.js'
import Conta from './components/form/Conta.js'
import './App.css'

function App() {
  return (
    <div className='bc'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/criar-conta' element={<CriarConta/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/contas/:id' element={<Conta/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
