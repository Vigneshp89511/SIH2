import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Start from './pages/startingpage'
import Farmlogin from './pages/farmlogin'
import Interlogin from './pages/interlogin'
import Custlogin from './pages/custlogin'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/farm' element={<Farmlogin/>}/>
      <Route path='/inter' element={<Interlogin/>}/>
      <Route path='/cust' element={<Custlogin/>}/>
     </Routes>
    </>
  )
}

export default App;
