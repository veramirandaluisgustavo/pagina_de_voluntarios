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
import Foro from './pages/Foro/Foro'
import Recursos from './pages/Recursos/Recursos'
import Tipos from './pages/Tipos/Tipos'
import Preguntas from './pages/Preguntas/Preguntas'
import Formate from './pages/Formate/Formate'
import Colabora from './pages/Colabora/colabora'
import Formate2 from './pages/Formate/Formate2'
import Contacta from './pages/Contacta/Contacta'
import ChatForo from './pages/Foro/components/ChatForo'
import RegistroU from './pages/Registro/RegistroU'
import Registro from './pages/register/Registro'
import TiposDeVoluntariado from './pages/pasosVoluntariado/TiposDeVoluntariado'
function App() {


  return (
    <>
    <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/pasos' element={<Pasos></Pasos>}></Route>
          <Route path='/foro' element={<Foro></Foro>}></Route>
          <Route path='/colabora' element={<Colabora></Colabora>}></Route>
          <Route path='/formate' element={<Formate2></Formate2>}></Route>
          <Route path='/contacta' element={<Contacta></Contacta>}></Route>
          <Route path='/foro/:id' element={<ChatForo></ChatForo>}></Route>
         <Route path='/tiposDeVoluntariado' element={<TiposDeVoluntariado></TiposDeVoluntariado>}></Route>
          
          <Route path='/recursos' element={<Recursos></Recursos>}></Route>
          <Route path='/tipos' element={<Tipos></Tipos>}></Route>
          <Route path='/preguntas' element={<Preguntas></Preguntas>}></Route>
          <Route path='/registroU' element={<Registro></Registro>}></Route>
          <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
