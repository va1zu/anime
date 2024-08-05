import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from './pages/mainPage/MainPage'
import Liders from './pages/liders/Liders'
import Follow from './pages/follow/Follow'


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/liders" element={<Liders />} />
          <Route path="/follow" element={<Follow />} />
        </Routes>
      </BrowserRouter>  
      
    </>
  )
}


export default App