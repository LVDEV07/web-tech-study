import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from '../Pages/Sobre'
import Login from '../Pages/Login'

export default function Router() {
  return (
   <BrowserRouter>
   
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sobre' element={<Sobre/>}/>


    </Routes>

   </BrowserRouter>
  )
}
