import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./assets/Pages/MainPage"
import Login from './assets/Pages/Login/Login';
import Register from './assets/Pages/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/*' element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
