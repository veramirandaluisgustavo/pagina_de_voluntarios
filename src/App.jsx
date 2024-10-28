import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Navigate,Route,Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Login from './pages/Login/Login'
import Pasos from './pages/6Pasos/Pasos'
import Footer from './components/Footer'
function App() {


  return (
    <>
    <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/pasos' element={<Pasos></Pasos>}></Route>
          <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>

        </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
