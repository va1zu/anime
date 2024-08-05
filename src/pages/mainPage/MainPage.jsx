import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './MainPage.module.css'
import Header from '../../comp/header/Header'
const MainPage = () => {
  return (
      <div className={cl.mainInfo}>
    <div className="container">
      <Header />
      <div className={cl.headh}>
        <div className={cl.infoMain}>
          <h1>Главная</h1>
        </div>
        <div className={cl.anime}>
        </div>
      </div>
    </div>
      </div>
  )
}

export default MainPage
