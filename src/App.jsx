import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Accordion } from 'flowbite-react'
import Navbarcode from './components/navbar'
import Footer from './components/footer';
import Home from './pages/home';
import Horario from './pages/horario';
// import Material from './material';
import Login from './components/login';
import Signup from './components/signup';
import PersonalArea from './pages/personalarea';
import PersonalArea2 from './pages/personalarea2';
import Test from './pages/test'
import OficialInscricao from './pages/oficialinscricao'

function App() {
  return (
    <>
      <Navbarcode></Navbarcode>
      {/* <Home></Home> */}
      {/* <Login></Login>
      <Signup></Signup> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/horario' element={<Horario />} />
        <Route path='/test' element={<Test />} />
        {/*<Route path='/material' element={<Material />} /> */}
        <Route path='/personalarea' element={<PersonalArea />} />
        <Route path='/personalarea2' element={<PersonalArea2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/inscricao' element={<OficialInscricao />} />
      </Routes>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
