import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./assets/Pages/MainPage"
import Login from './assets/Pages/Login/Login';
import Register from './assets/Pages/Register/Register';
import AgregarPresupuesto from './assets/Pages/Gastos/AgregarPresupuesto';
import AgregarGastos from './assets/Pages/Gastos/AgregarGastos';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/agregarPresupuesto' element={<AgregarPresupuesto/>}></Route>
        <Route path='/agregarGastos' element={<AgregarGastos/>}></Route>
        <Route path='/*' element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
